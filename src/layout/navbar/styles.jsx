import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 65px;
  background: ${(props) =>
    props.$top ? 'transparent' : props.theme.colors.primary};
  transition: background 0.25s ease-in-out;
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
`;

export const NavigationItem = styled.span`
  display: inline-block;
  margin-top: 8px;
  font-size: ${(props) => props.theme.fontSize.tiny};
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
