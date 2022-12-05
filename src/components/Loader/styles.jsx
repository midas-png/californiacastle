import styled, { keyframes } from 'styled-components';

const jumpAnimation = keyframes`
 0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10px;
`;

export const LoadingBall = styled.div`
  background: #121212;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  animation: ${jumpAnimation} 0.6s ${({ duration }) => `${duration}s`} linear
    infinite;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  margin-top: 120px;
`;
