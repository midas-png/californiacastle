import styled from 'styled-components';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const FooterLogo = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavigationItem = styled.span`
  display: inline-block;
  margin-top: 8px;
  font-size: ${({ theme }) => theme.fontSize.tiny};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  cursor: pointer;

  &:after {
    display: block;
    content: '';
    padding-bottom: 3px;
    border-bottom: solid 2px currentColor;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

export const RightsReserved = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const FacebookLogo = styled(FaFacebook)`
  height: 50px;
  width: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  stroke-width: 10;
  fill: transparent;
  stroke: white;

  &:hover {
    fill: blue;
    stroke: blue;
  }
`;

export const YoutubeLogo = styled(FaYoutube)`
  height: 50px;
  width: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  stroke-width: 10;
  fill: transparent;
  stroke: white;

  &:hover {
    fill: red;
    stroke: red;
  }
`;
