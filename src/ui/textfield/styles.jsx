import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: ${({ size }) => (size === 'parent' ? '100%' : '200px')};

  ${({ adaptiveStretch }) =>
    adaptiveStretch &&
    `
    @media screen and (max-width: 815px) {
    width: 60%;
  }
  `}
`;

export const TextfieldTitle = styled.span`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.petite};
  color: ${({ theme }) => theme.colors.quaternary};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TextfieldWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid
    ${({ error, theme }) => (!error ? theme.colors.tertiary : '#f00')};
  height: 50px;
  padding: 0 15px;
`;

export const TextfieldCodeNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.tiny};
  color: ${({ theme }) => theme.colors.quaternary};
`;

export const TextfieldInput = styled.input.attrs(({ type, placeholder }) => ({
  type: type || 'text',
  placeholder: placeholder,
}))`
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.tiny};
  color: ${({ theme }) => theme.colors.quaternary};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const TextfieldError = styled.span`
  color: #f00;
`;
