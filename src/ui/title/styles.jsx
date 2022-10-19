import styled, { css } from 'styled-components';

export const headingStyles = {
  h1: css`
    font-size: 64px;
    font-style: normal;
    line-height: 48px;
  `,
  h2: css`
    font-size: 28px;
    font-style: normal;
    line-height: 36px;
  `,
  h3: css`
    font-size: 24px;
    font-style: normal;
    line-height: 32px;
  `,
  h4: css`
    font-size: 20px;
    font-style: normal;
    line-height: 28px;
    letter-spacing: 0.05em;
  `,
};

export const weightStyles = {
  bold: css`
    font-weight: 700;
  `,
  semibold: css`
    font-weight: 600;
  `,
  medium: css`
    font-weight: 500;
  `,
};

export const TitleComponent = styled.span`
  margin: 0;
  user-select: none;

  ${(props) =>
    props.color &&
    `
    color: ${props.color};
  `}
  ${(props) =>
    props.secondaryFont &&
    `
    font-family: ${props.theme.fontFamily.secondary};
  `}

  ${({ variant }) => headingStyles[variant]}
  ${({ weight = 'medium' }) => weightStyles[weight]}
`;
