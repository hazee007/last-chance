import { Box, Stack } from "@mui/material";

import Item from "../components/Item";
import Navigation from "../components/Navigation";
import Section from "../components/Section";
import { products } from "../dummy";

export default function Shop() {
  return (
    <Box>
      <Navigation />
      <Box>
        <Section />
        <Stack spacing={2} direction={"row"}>
          {products
            .filter((item, index) => index < 5)
            .map((product) => (
              <Item key={product.id} show={product.show} />
            ))}
        </Stack>{" "}
        <Section />
        <Stack spacing={2} direction={"row"}>
          {products
            .filter((item, index) => index < 5)
            .map((product) => (
              <Item key={product.id} show={product.show} />
            ))}
        </Stack>{" "}
        <Section />
        <Stack spacing={2} direction={"row"}>
          {products
            .filter((item, index) => index < 5)
            .map((product) => (
              <Item key={product.id} show={product.show} />
            ))}
        </Stack>
      </Box>
    </Box>
  );
}
