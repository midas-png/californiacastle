import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fontFamily.primary};
  }
`;
