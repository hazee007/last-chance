import { Box, Stack } from "@mui/material";

import Item from "../components/Item";
import Navigation from "../components/Navigation";
import Section from "../components/Section";
import { products } from "../dummy";
import useResponsive from "../hooks/useResponsive";

export default function Shop() {
  const smDown = useResponsive("down", "sm");

  const itemsToShow = smDown ? 3 : 4;

  return (
    <Box>
      <Navigation />
      <Box>
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <Section />
            <Stack spacing={2} direction={"row"} flexWrap={"wrap"} useFlexGap>
              {products
                .filter((item, index) => index < itemsToShow)
                .map((product) => (
                  <Item key={product.id} show={product.show} />
                ))}
            </Stack>
          </div>
        ))}
      </Box>
    </Box>
  );
}
