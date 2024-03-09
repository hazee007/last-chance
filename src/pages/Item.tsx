import { Box, Button, Divider, Stack, styled, Typography } from "@mui/material";

import ImageCarousel from "../components/ImageCarousel";
import ImageSelector from "../components/ImageSelector";
import ProductItem from "../components/Item";
import Navigation from "../components/Navigation";
import useResponsive from "../hooks/useResponsive";

const DetailCard = styled(Box)({
  height: "30%",
});

const GridBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 30,
});

const products = [
  {
    id: 1,
    name: "MacBook",
    price: 22,
    image: "macbook.jpg",
    show: true,
  },
  {
    id: 2,
    name: "Chevrolet",
    price: 12,
    image: "chevrolet.jpg",
    show: true,
  },
  {
    id: 3,
    name: "BMW",
    price: 18,
    image: "bmw.jpg",
    show: false,
  },
  {
    id: 4,
    name: "Mercedes",
    price: 16,
    image: "mercedes.jpg",
    show: false,
  },
  {
    id: 5,
    name: "Mercedes",
    price: 16,
    image: "mercedes.jpg",
    show: false,
  },
];

export default function Item() {
  const smDown = useResponsive("down", "sm");
  return (
    <Box>
      <Navigation />
      <Stack
        spacing={5}
        justifyContent={"space-between"}
        alignItems="start"
        direction={smDown ? "column" : "row"}
        sx={{ mt: 5, mb: 10 }}
      >
        <ImageSelector />

        <DetailCard>
          <Typography variant="h4">MacBook</Typography>
          <Divider />

          <GridBox>
            <Typography sx={{ mt: 1 }} variant="h5">
              $22
            </Typography>

            <Typography variant="body1">
              MacBook is a line of Macintosh laptop computers designed and
              marketed by Apple Inc. It consists of a full-size keyboard, a
              machined aluminum case, and, in the more modern versions, a thin
              light structure. The MacBook is the best-selling Macintosh in
              history.
            </Typography>

            <Typography variant="h6">10 quantity available in stock</Typography>

            <Button
              variant="contained"
              size="medium"
              sx={{ width: smDown ? "50%" : "30%" }}
            >
              Add to cart
            </Button>
          </GridBox>
        </DetailCard>
      </Stack>
      <Box sx={{ mt: 5 }}>
        <Box>
          <Divider />
          <Typography sx={{ mt: 2, mb: 2 }} variant="h6">
            Similar Products
          </Typography>
          <ImageCarousel>
            {products.map((item) => (
              <ProductItem key={item?.id} show={item.show} />
            ))}
          </ImageCarousel>
        </Box>

        <Box sx={{ mt: 5 }}>
          {/* <Divider /> */}
          <Typography sx={{ mt: 2, mb: 2 }} variant="h6">
            Viewed Products
          </Typography>
          <ImageCarousel>
            {products.map((item) => (
              <ProductItem key={item?.id} show={item.show} />
            ))}
          </ImageCarousel>
        </Box>
      </Box>
    </Box>
  );
}
