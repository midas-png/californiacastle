import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar } from './sidebar';
import {
  ButtonWrapper,
  BurgerMenu,
  NavbarWrapper,
  NavigationWrapper,
  NavigationLogo,
  NavigationItem,
  MenuWrapper,
} from './styles';
import { Button } from 'ui';

const NAVIGATION_ITEMS = [
  {
    label: 'Home',
    linkTo: '/californiacastle',
  },
  {
    label: 'About us',
    linkTo: '/about',
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
          {/* {NAVIGATION_ITEMS.map(({ linkTo, label }, index) => (
            <Link to={linkTo} key={index}>
              <NavigationItem $top={navbarOnTop}>{label}</NavigationItem>
            </Link>
          ))} */}
        </NavigationWrapper>
        {/* <MenuWrapper>
          <BurgerMenu $top={navbarOnTop} onClick={() => setSidebarOpen(true)} />
        </MenuWrapper> */}
      </NavbarWrapper>
      {/* <Sidebar isActive={sidebarOpen} setIsActive={setSidebarOpen} /> */}
    </>
  );
};
