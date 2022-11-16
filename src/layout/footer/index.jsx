import { Link } from 'react-router-dom';
import {
  FooterWrapper,
  FooterLogo,
  NavigationWrapper,
  NavigationItem,
  RightsReserved,
  LogoWrapper,
  FacebookLogo,
  YoutubeLogo,
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

export const Footer = () => (
  <FooterWrapper>
    <FooterLogo>California Castle</FooterLogo>
    <NavigationWrapper>
      {NAVIGATION_ITEMS.map(({ linkTo, label }, index) => (
        <Link to={linkTo} key={index}>
          <NavigationItem>{label}</NavigationItem>
        </Link>
      ))}
    </NavigationWrapper>
    <LogoWrapper>
      <FacebookLogo />
      <YoutubeLogo />
    </LogoWrapper>
    <RightsReserved>
      &copy; {new Date().getFullYear()} All rights reserved
    </RightsReserved>
  </FooterWrapper>
);
