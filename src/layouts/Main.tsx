import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { green, lime } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";

import Footer from "../components/Footer";
import Header from "../components/Header";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: lime[500],
      // lime[500],
    },
  },
});

const Root = styled(Box)({
  flexGrow: 1,
});

export default function MainLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Header />
        <Container maxWidth="lg">
          <Outlet />
        </Container>
        <Footer />
      </Root>
    </ThemeProvider>
  );
}
