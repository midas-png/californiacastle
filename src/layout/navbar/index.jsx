import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar } from './sidebar';
import {
  BurgerMenu,
  NavbarWrapper,
  NavigationWrapper,
  NavigationLogo,
  NavigationItem,
  MenuWrapper,
  OptionalDropdownWrapper,
  OptionsLinkWrapper,
  OptionLink,
} from './styles';

const NAVIGATION_ITEMS = [
  {
    label: 'Properties',
    options: [
      {
        label: 'Location 1',
        linkTo: '/room/1',
      },
      {
        label: 'Location 2',
        linkTo: '/room/2',
      },
      {
        label: 'Location 3',
        linkTo: '/room/3',
      },
      {
        label: 'Location 4',
        linkTo: '/room/4',
      },
    ],
  },
  {
    label: 'Carrers',
    linkTo: '/carrers',
  },
  {
    label: 'Policy Privacy',
    linkTo: '/policy',
  },
  {
    label: 'Contact',
    linkTo: '/contact',
  },
];

const ROUTES_DYNAMIC_NAVBAR = ['/californiacastle'];

export const Navbar = () => {
  const { pathname } = useLocation();
  const [onTop, setOnTop] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isNavbarStatic = !ROUTES_DYNAMIC_NAVBAR.includes(pathname);
  const navbarOnTop = isNavbarStatic ? false : onTop;

  useEffect(() => {
    window.onscroll = () =>
      window.scrollY < 80 ? setOnTop(true) : setOnTop(false);

    return () => (window.onscroll = null);
  });

  return (
    <>
      <NavbarWrapper $top={navbarOnTop}>
        <NavigationWrapper>
          <Link to='/californiacastle'>
            <NavigationLogo $top={navbarOnTop}>
              California Castle
            </NavigationLogo>
          </Link>
          {NAVIGATION_ITEMS.map(({ linkTo, options, label }, index) => {
            if (linkTo)
              return (
                <Link to={linkTo} key={index}>
                  <NavigationItem $top={navbarOnTop}>{label}</NavigationItem>
                </Link>
              );
            else
              return (
                <OptionsLinkWrapper key={index}>
                  <NavigationItem $top={navbarOnTop}>{label}</NavigationItem>
                  <OptionalDropdownWrapper>
                    {options.map(({ label, linkTo }) => (
                      <OptionLink key={Math.random()} to={linkTo}>
                        {label}
                      </OptionLink>
                    ))}
                  </OptionalDropdownWrapper>
                </OptionsLinkWrapper>
              );
          })}
        </NavigationWrapper>
        <MenuWrapper>
          <BurgerMenu $top={navbarOnTop} onClick={() => setSidebarOpen(true)} />
        </MenuWrapper>
      </NavbarWrapper>
      <Sidebar isActive={sidebarOpen} setIsActive={setSidebarOpen} />
    </>
  );
};
