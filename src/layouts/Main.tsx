import Box from "@mui/material/Box";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { styled } from "@mui/system";
import { Container } from "@mui/material";

const Root = styled(Box)({
  flexGrow: 1,
});

export default function MainLayout() {
  return (
    <Root>
      <Header />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </Root>
  );
}
