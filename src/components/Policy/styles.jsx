import styled from 'styled-components';
import { Title } from 'ui';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const PrivacyWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.quinary};
`;

export const PrivacyContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export const TitleComponent = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.giant};
  padding-bottom: 25px;
`;

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ArticleDescription = styled.span`
  word-wrap: break-word;
`;
