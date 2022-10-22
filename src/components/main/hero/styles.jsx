import styled, { keyframes } from 'styled-components';
import { Button, Title } from 'ui';

const slideIn = keyframes`
 from { 
  transform: translateX(150px);
  opacity: 0.1;
}
 to { 
  transform: translateX(0px);
  opacity: 1;
 }
`;

export const HeroWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
`;

export const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -50%);
  flex-direction: column;
  gap: 15px;

  @media screen and (max-width: 620px) {
    transform: translate(-50%, -50%);
  }
`;

export const DescriptionContent = styled.span`
  width: 85%;
  color: ${(props) => props.theme.colors.primary};
  line-height: 23px;
  letter-spacing: 1px;
  animation: ${slideIn} 1.5s;
`;

export const BoldText = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamily.secondary};
  font-weight: 700;
`;

export const ContentTitle = styled(Title).attrs({
  variant: 'h1',
})`
  animation: ${slideIn} 1s;
`;

export const ContentButton = styled(Button)`
  animation: ${slideIn} 2s;
`;
