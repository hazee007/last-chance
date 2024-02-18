import { Paper, Stack, styled } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Store from "../assets/images/store.jpg";
import FeatureCard from "../components/FeatureCard";
import ImageAutomation from "../components/ImageAutomation";

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

const Box = styled(Paper)({
  width: "20%",
});

const ImageContainer = styled(Paper)({
  width: "80%",
  height: "80%",
});

export default function Home() {
  return (
    <div>
      <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
        <Box elevation={3}>
          <List>
            {categories.map((category) => (
              <ListItem divider dense key={category.id}>
                {category.name}
              </ListItem>
            ))}
          </List>
        </Box>

        <ImageContainer elevation={0}>
          <ImageAutomation />
        </ImageContainer>
      </Stack>

      <Stack direction="row" justifyContent={"space-between"} sx={{ mt: 10 }}>
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
