import { Box, Button, Stack, Typography } from "@mui/material";

export default function Section() {
  return (
    <Box sx={{ mt: 1, mb: 2 }}>
      <Stack spacing={2} justifyContent="space-between" direction="row">
        <Typography variant="h4">Arabic</Typography>
        <Button variant="contained" size="large" color="secondary">
          View All
        </Button>
      </Stack>
    </Box>
  );
}
