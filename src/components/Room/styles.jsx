import styled from 'styled-components';
import { Title } from 'ui';

export const RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
`;

export const ImageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  height: 400px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ImageHeader = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const RoomInfoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.quinary};
`;

export const TitleComponent = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.giant};
  padding-bottom: 25px;
`;

export const RoomDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  top: -110px;
  background: ${({ theme }) => theme.colors.primary};
  width: 85%;
  padding: 30px 40px;

  @media screen and (max-width: 768px) {
    top: 0;
    width: 100%;
  }
`;

export const RoomInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
