import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 75%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const SwiperWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 25px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  }
`;

export const SectionDescription = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: ${({ theme }) => theme.fontSize.tiny};
  color: ${({ theme }) => theme.colors.quaternary};
  line-height: 25px;
  letter-spacing: 0.8px;
  width: 90%;
  word-wrap: break-word;
`;

export const SectionPoint = styled.span`
  font-size: ${({ theme }) => theme.fontSize.tiny};
  color: ${({ theme }) => theme.colors.quaternary};
`;

export const SectionPointsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(auto-fit, fit-content(100%));
  gap: 10px 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, fit-content(100%));
    width: 100%;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const Price = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  text-transform: uppercase;
`;
