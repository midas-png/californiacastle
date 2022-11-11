import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';

export const NavbarWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 80px;
  margin-top: -80px;
  background: ${(props) =>
    props.$top ? 'transparent' : props.theme.colors.primary};
  box-shadow: ${(props) => !props.$top && props.theme.boxShadow.primary};
  transition: all 0.2s ease-in-out;
  z-index: 10;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const NavigationLogo = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: 500;
  cursor: pointer;
  color: ${(props) => props.$top && props.theme.colors.primary};
`;

export const NavigationItem = styled.span`
  display: inline-block;
  margin-top: 8px;
  font-size: ${(props) => props.theme.fontSize.tiny};
  color: ${(props) => props.$top && props.theme.colors.primary};
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 30px;
    width: 30px;
  }
`;

export const BurgerMenu = styled(BiMenu).attrs((props) => ({
  fill: (props.$top && props.theme.colors.primary) || 'currentColor',
}))`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
