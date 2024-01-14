import { Paper, Stack, styled } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import NavImage from "../assets/images/Group 8.png";

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
  { id: 10, name: "Seafood" },
  { id: 11, name: "Seafood" },
  { id: 12, name: "Others" },
];

const Box = styled(Paper)({
  width: "20%",
});

const ImageContainer = styled(Paper)({
  width: "80%",
  height: "80%",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
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
        <ImageContainer>
          <StyledImage src={NavImage} alt="Navigation" />
        </ImageContainer>
      </Stack>
    </div>
  );
}
