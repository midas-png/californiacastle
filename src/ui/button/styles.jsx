import styled, { css } from 'styled-components';

const colorTypeMap = {
  primary: css`
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};

    &:active {
      color: ${(props) => props.theme.colors.tertiary};
    }
  `,
  secondary: css`
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  `,
};

export const ButtonComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.tiny};
  padding: 25px 30px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  height: 30px;
  width: 200px;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:active {
    transform: scale(0.94);
  }

  ${({ type = 'primary' }) => colorTypeMap[type]};
`;
