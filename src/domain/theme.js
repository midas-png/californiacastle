import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#fff',
    secondary: '#121212',
    tertiary: '#dbdbdb',
  },
  boxShadow: {
    primary: '0px 4px 20px 10px #0000001a',
    secondary: '0px 4px 20px 0px #0000000d',
  },
  fontFamily: {
    primary: '"Rubik", sans-serif',
    secondary: '"Cormorant Garamond", serif',
  },
  fontSize: {
    large: '24px',
    medium: '20px',
    small: '16px',
    tiny: '14px',
    petite: '12px',
  },
  fontWeight: {
    large: '700',
    medium: '500',
    small: '300',
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
