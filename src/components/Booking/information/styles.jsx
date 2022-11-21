import styled from 'styled-components';

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const AppointmentDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 80%;
`;
