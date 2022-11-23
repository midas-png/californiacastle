import styled from 'styled-components';

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => reverse && 'row-reverse'};
  height: 650px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background: ${({ theme }) => theme.colors.primary};
  width: 42%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentCategory = styled.span`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.petite};
  color: ${({ theme }) => theme.colors.quaternary};
  text-align: center;
`;

export const ContentDescription = styled.span`
  width: 65%;
  color: ${({ theme }) => theme.colors.quaternary};
  line-height: 23px;
  letter-spacing: 1px;
  word-wrap: break-word;
  text-align: center;
`;

export const Right = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: 58%;
`;
