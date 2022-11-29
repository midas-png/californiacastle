import styled from 'styled-components';
import { Link } from 'react-scroll';

export const BookerWrapper = styled.div`
  display: flex;
  padding: 100px 110px 50px 110px;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-end;
  height: 100px;
  width: 100%;
  -webkit-appearance: none;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  z-index: 2;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: fit-content;
    padding: 30px 0;
    justify-content: center;
    align-items: center;
  }
`;

export const LinkScroll = styled(Link)`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
