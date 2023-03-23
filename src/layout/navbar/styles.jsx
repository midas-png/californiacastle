import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  margin: 0;
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

export const ButtonWrapper = styled(Link)`
  display: ${({ $top }) => $top && 'none'};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const OptionalDropdownWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transform: scaleY(0);
  transform-origin: top;
  width: 200px;
  background: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s ease-in-out;
  padding: 20px;
`;

export const OptionLink = styled(Link)`
  display: none;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
    padding-bottom: 10px;
  }
`;

export const OptionsLinkWrapper = styled.div`
  &:hover ${OptionalDropdownWrapper} {
    transform: scaleY(1);
  }

  &:hover ${OptionLink} {
    display: block;
  }
`;
