import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import macbook from "../assets/images/macbook.jpg";
import CartActionButtons from "../components/CartActionButtons";

const ImageContainer = styled("div")({
  width: "20%",
  height: "20%",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "0.5rem",
});

const Root = styled(Box)({
  width: "100%",
  height: "100%",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export default function Cart() {
  return (
    <Root>
      <Box sx={{ mt: 2, width: "50%" }}>
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
            <CartActionButtons />
          </Box>
          <Typography variant="h6">
            <b>$22</b>
          </Typography>
          <IconButton size="large">
            <DeleteIcon fontSize="large" />
          </IconButton>
        </Stack>
        <Divider />
      </Box>
      <Box sx={{ mt: 2, width: "50%" }}>
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
            <CartActionButtons />
          </Box>
          <Typography variant="h6">
            <b>$22</b>
          </Typography>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
        <Divider />
      </Box>
      <Box sx={{ mt: 2, width: "50%" }}>
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
            <CartActionButtons />
          </Box>
          <Typography variant="h6">
            <b>$22</b>
          </Typography>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
        <Divider />
      </Box>
    </Root>
  );
}
