import styled from 'styled-components';

export const BenefitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BenefitDescription = styled.span`
  width: 80%;
  color: ${({ theme }) => theme.colors.quaternary};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 23px;
  letter-spacing: 1px;
  word-wrap: break-word;
`;
