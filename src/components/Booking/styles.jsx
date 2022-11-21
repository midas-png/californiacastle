import styled from 'styled-components';
import { Icons } from 'assets';

export const BookingWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BookingImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ApartmentIcon = styled(Icons.ApartmentRent)`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageLogo = styled.h1`
  position: absolute;
  top: 30px;
  left: 100px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  z-index: 2;
`;
