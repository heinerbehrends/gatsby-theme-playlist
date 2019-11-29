import React from 'react';
import { Container, ThemeProvider } from 'theme-ui';
import theme from '../theme/theme';
import 'normalize.css/normalize.css';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>{children}</Container>
  </ThemeProvider>
);

export default Layout;
