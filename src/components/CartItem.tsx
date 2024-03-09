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
import useResponsive from "../hooks/useResponsive";

const ImageContainer = styled("div")(({ theme }) => ({
  width: "25%",
  height: "25%",
  [theme.breakpoints.down("md")]: {
    width: "50%",
    height: "50%",
  },
}));

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "0.5rem",
});
export default function CartItem() {
  const smDown = useResponsive("down", "sm");
  return (
    <Box sx={{ mt: 1, width: smDown ? "100%" : "50%" }}>
      <Stack
        alignItems={"center"}
        direction={"row"}
        spacing={smDown ? 2 : 8}
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
