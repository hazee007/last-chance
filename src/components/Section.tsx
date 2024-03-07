import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Section() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop/arabic");
  };
  return (
    <Box sx={{ mt: 1, mb: 2 }}>
      <Stack spacing={2} justifyContent="space-between" direction="row">
        <Typography variant="h4">Arabic</Typography>
        <Button
          onClick={handleClick}
          variant="contained"
          size="large"
          color="secondary"
        >
          View All
        </Button>
      </Stack>
    </Box>
  );
}
