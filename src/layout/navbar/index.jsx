import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarWrapper,
  NavigationWrapper,
  NavigationLogo,
  NavigationItem,
} from './styles';

const NAVIGATION_ITEMS = [
  {
    label: 'Locations',
    link_to: '/',
  },
  {
    label: 'Assistance',
    link_to: '/',
  },
  {
    label: 'Contacts',
    link_to: '/',
  },
];

export const Navbar = () => {
  const [onTop, setOnTop] = useState(true);
  useEffect(() => {
    window.onscroll = () =>
      window.scrollY < 80 ? setOnTop(true) : setOnTop(false);

    return () => (window.onscroll = null);
  });

  return (
    <NavbarWrapper $top={onTop}>
      <NavigationWrapper>
        <NavigationLogo>California Castle</NavigationLogo>
        {NAVIGATION_ITEMS.map((item, index) => (
          <Link to={item.link_to} key={index}>
            <NavigationItem>{item.label}</NavigationItem>
          </Link>
        ))}
      </NavigationWrapper>
      <div></div>
    </NavbarWrapper>
  );
};
