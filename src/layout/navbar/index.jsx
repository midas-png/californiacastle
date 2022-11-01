import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar } from './sidebar';
import {
  NavbarWrapper,
  NavigationWrapper,
  NavigationLogo,
  NavigationItem,
  MenuWrapper,
  BurgerMenu,
} from './styles';

const NAVIGATION_ITEMS = [
  {
    label: 'Locations',
    linkTo: '/locations',
  },
  {
    label: 'Assistance',
    linkTo: '/assistance',
  },
  {
    label: 'Contacts',
    linkTo: '/contacts',
  },
];

const ROUTES_STATIC_NAVBAR = ['/locations', '/assistance', '/contacts'];

export const Navbar = () => {
  const { pathname } = useLocation();
  const [onTop, setOnTop] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isNavbarStatic = ROUTES_STATIC_NAVBAR.includes(pathname);
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
          {NAVIGATION_ITEMS.map(({ linkTo, label }, index) => (
            <Link to={linkTo} key={index}>
              <NavigationItem $top={navbarOnTop}>{label}</NavigationItem>
            </Link>
          ))}
        </NavigationWrapper>
        <MenuWrapper>
          <BurgerMenu $top={navbarOnTop} onClick={() => setSidebarOpen(true)} />
        </MenuWrapper>
      </NavbarWrapper>
      <Sidebar isActive={sidebarOpen} setIsActive={setSidebarOpen} />
    </>
  );
};
