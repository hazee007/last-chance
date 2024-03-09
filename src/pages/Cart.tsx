import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";

import CartItem from "../components/CartItem";
import useResponsive from "../hooks/useResponsive";

const Root = styled(Box)({
  marginTop: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export default function Cart() {
  const smDown = useResponsive("down", "sm");
  return (
    <Root>
      {[...Array(5)].map((_, index) => (
        <CartItem key={index} />
      ))}
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ mt: 3, width: smDown ? "100%" : "50%" }}
      >
        <Box></Box>
        <Typography variant="h4">Total: $110</Typography>

        <Button variant="contained" size="large" color="secondary">
          Checkout
        </Button>
      </Stack>
    </Root>
  );
}
