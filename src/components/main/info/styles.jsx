import styled from 'styled-components';
import { Title } from 'ui';

export const InfoWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  background: ${({ theme }) => theme.colors.primary};
  width: 58%;
  padding: 0 80px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 40px 80px;
  }
`;

export const ImageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: 42%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const TitleComponent = styled(Title)`
  font-size: 40px;
  line-height: 40px;
`;

export const BenefitsWrapper = styled.div`
  display: grid;
  justify-content: flex-start;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 180px 180px;
  gap: 35px;

  @media screen and (max-width: 1024px) {
    grid-template-rows: 1fr 1fr;
  }
`;

export const Benefit = styled.div`
  background: blue;
  height: 100%;
  width: 100%;
`;

export const InfoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
