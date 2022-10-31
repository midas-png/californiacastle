import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.div`
  position: fixed;
  z-index: ${({ $isActive }) => ($isActive ? '999' : '0')};
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  top: 0;
  right: ${({ $isActive }) => ($isActive ? '0' : '-100%')};
  opacity: ${({ $isActive }) => ($isActive ? '100%' : '0')};
  transition: 0.3s ease-in-out;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
`;

export const LinksWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LinkWrapper = styled(Link)`
  display: inline-block;
  margin-top: 8px;
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
