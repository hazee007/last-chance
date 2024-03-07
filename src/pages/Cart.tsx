import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";

import CartItem from "../components/CartItem";

const Root = styled(Box)({
  marginTop: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export default function Cart() {
  return (
    <Root>
      {[...Array(5)].map((_, index) => (
        <CartItem key={index} />
      ))}
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ mt: 3, width: "50%" }}
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
