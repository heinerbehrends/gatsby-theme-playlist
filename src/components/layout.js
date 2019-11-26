import React from "react";
import { Container, ThemeProvider } from "theme-ui";
import theme from "../theme/theme";

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>{children}</Container>
  </ThemeProvider>
);

export default Layout;
