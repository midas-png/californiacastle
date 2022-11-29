import styled from 'styled-components';
import { Title } from 'ui';

export const ReservationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  height: 60%;
  height: fit-content;
  width: 25%;
  padding: 15px 25px;
  gap: 15px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const TitleComponent = styled(Title)`
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.giant};
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const PriceTitle = styled.span`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.petite};
  color: ${({ theme }) => theme.colors.quaternary};
`;

export const Price = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.quaternary};
  text-transform: uppercase;
`;
