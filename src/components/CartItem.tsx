import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import macbook from "../assets/images/macbook.jpg";
import CartActionButtons from "../components/CartActionButtons";

const ImageContainer = styled("div")({
  width: "25%",
  height: "25%",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "0.5rem",
});
export default function CartItem() {
  return (
    <Box sx={{ mt: 3, width: "50%" }}>
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={"row"}
        sx={{ mb: 1 }}
      >
        <ImageContainer>
          <StyledImage src={macbook} alt="Navigation" />
        </ImageContainer>
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Apple MacBook Pro 16.2-inch
          </Typography>
          <Typography variant="h6" sx={{ mb: 2, mt: 1 }}>
            $22
          </Typography>
          <CartActionButtons />
        </Box>

        <IconButton size="large">
          <DeleteIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Divider />
    </Box>
  );
}
