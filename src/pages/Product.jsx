import { Box, Stack } from "@mui/material";

import Item from "../components/Item";
import Navigation from "../components/Navigation";
import Section from "../components/Section";
import { products } from "../dummy";

export default function Product() {
  return (
    <Box>
      <Navigation />
      <Box sx={{ mt: 5 }}>
        <Section />
        <Stack spacing={3} direction={"row"} flexWrap={"wrap"} useFlexGap>
          {products.map((product) => (
            <Item key={product.id} show={product.show} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
