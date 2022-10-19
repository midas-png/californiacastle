import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  position: fixed;
  z-index: ${({ $isActive }) => ($isActive ? '999' : '0')};
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  right: ${({ $isActive }) => ($isActive ? '0' : '-100%')};
  opacity: ${({ $isActive }) => ($isActive ? '100%' : '0')};
  transition: 0.3s ease-in-out;
`;
