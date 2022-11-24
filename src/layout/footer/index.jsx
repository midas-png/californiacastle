import {
  FooterWrapper,
  FooterLogo,
  NavigationWrapper,
  NavigationItem,
  RightsReserved,
  LogoWrapper,
  FacebookLogo,
  YoutubeLogo,
  LinkedinLogo,
  RightsWrapper,
  InformationWrapper,
  InformationUnitWrapper,
  InformationUnits,
  InformationContent,
  InformationTime,
  MailIcon,
  PhoneIcon,
} from './styles';

export const Footer = () => (
  <FooterWrapper>
    <InformationWrapper>
      <FooterLogo>California Castle</FooterLogo>
      <NavigationWrapper>
        <InformationUnitWrapper>
          <NavigationItem>Opening Hours</NavigationItem>
          <InformationUnits>
            <InformationContent>
              Weekdays, Saturday: <InformationTime>11AM - 6PM</InformationTime>
            </InformationContent>
            <InformationContent>
              Sunday: <InformationTime>11AM - 4PM</InformationTime>
            </InformationContent>
          </InformationUnits>
        </InformationUnitWrapper>
        <InformationUnitWrapper>
          <NavigationItem>Address</NavigationItem>
          <InformationUnits>
            <InformationContent>
              1635 E 33rd St, Los Angeles, CA 90011
            </InformationContent>
          </InformationUnits>
        </InformationUnitWrapper>
        <InformationUnitWrapper>
          <NavigationItem>Contact</NavigationItem>
          <InformationUnits>
            <InformationContent>
              <MailIcon />
              info@example.com
            </InformationContent>
            <InformationContent>
              <PhoneIcon />
              (900) 800-2342
            </InformationContent>
          </InformationUnits>
        </InformationUnitWrapper>
      </NavigationWrapper>
    </InformationWrapper>
    <RightsWrapper>
      <RightsReserved>
        &copy; {new Date().getFullYear()} All rights reserved
      </RightsReserved>
      <LogoWrapper>
        <FacebookLogo />
        <YoutubeLogo />
        <LinkedinLogo />
      </LogoWrapper>
    </RightsWrapper>
  </FooterWrapper>
);
