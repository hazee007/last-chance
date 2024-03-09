import { Chip, Paper, Stack, styled } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Store from "../assets/images/store.jpg";
import FeatureCard from "../components/FeatureCard";
import ImageAutomation from "../components/ImageAutomation";
import useResponsive from "../hooks/useResponsive";

const categories = [
  { id: 1, name: "Beverages" },
  { id: 2, name: "Condiments" },
  { id: 3, name: "Confections" },
  { id: 4, name: "Dairy Products" },
  { id: 5, name: "Grains/Cereals" },
  { id: 6, name: "Meat/Poultry" },
  { id: 7, name: "Produce" },
  { id: 8, name: "Seafood" },
  { id: 9, name: "Seafood" },
  { id: 10, name: "Others" },
];

const features = [
  {
    name: "Shop",
    description:
      "The store contains recycled product, and it is a good place to shop, and many more things to say about the store",
    image: Store,
  },
  {
    name: "Shop",
    description:
      "The store contains recycled product, and it is a good place to shop, and many more things to say about the store",
    image: Store,
  },
  {
    name: "Shop",
    description:
      "The store contains recycled product, and it is a good place to shop, and many more things to say about the store",
    image: Store,
  },
];

const ImageContainer = styled(Paper)(({ theme }) => ({
  width: "80%",
  height: "80%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100%",
  },
}));

export default function Home() {
  const smDown = useResponsive("down", "sm");

  return (
    <div>
      <Stack
        direction={smDown ? "column-reverse" : "row"}
        spacing={2}
        sx={{ mt: 1 }}
      >
        <>
          {smDown ? (
            <Stack direction={"row"} flexWrap={"wrap"} spacing={1} useFlexGap>
              {categories.map((category) => (
                <Chip key={category.id} label={category.name} />
              ))}
            </Stack>
          ) : (
            <List component={Paper} elevation={3} sx={{ width: "20%" }}>
              {categories.map((category) => (
                <ListItem divider dense key={category.id}>
                  {category.name}
                </ListItem>
              ))}
            </List>
          )}
        </>

        <ImageContainer elevation={0}>
          <ImageAutomation />
        </ImageContainer>
      </Stack>

      <Stack
        direction={smDown ? "column" : "row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={smDown ? 2 : 0}
        sx={{ mt: smDown ? 5 : 10 }}
      >
        {features.map((feature) => (
          <FeatureCard
            name={feature.name}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </Stack>
    </div>
  );
}
