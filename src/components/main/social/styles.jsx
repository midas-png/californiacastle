import styled from 'styled-components';
import { Title } from 'ui';

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 80px;
  background: ${({ theme }) => theme.colors.primary};
  width: 42%;
  padding: 80px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    gap: 30px;
  }
`;

export const SwiperWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: 58%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const TitleComponent = styled(Title)`
  font-size: 40px;
  line-height: 40px;
`;

export const ProgramsWrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media screen and (max-width: 1024px) {
    grid-template-rows: repeat(3, 70px);
    gap: 10px;
  }
`;

export const ProgramLogo = styled.img`
  object-fit: cover;
  width: 100%;
`;
