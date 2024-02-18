import { Box, Stack } from "@mui/material";

import Item from "../components/Item";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

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
];

export default function Products() {
  return (
    <Box>
      <Navigation />
      <Box>
        <Section />
        <Stack spacing={2} direction={"row"}>
          {products.map((product) => (
            <Item key={product.id} show={product.show} />
          ))}
        </Stack>{" "}
        <Section />
        <Stack spacing={2} direction={"row"}>
          {products.map((product) => (
            <Item key={product.id} show={product.show} />
          ))}
        </Stack>{" "}
        <Section />
        <Stack spacing={2} direction={"row"}>
          {products.map((product) => (
            <Item key={product.id} show={product.show} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
