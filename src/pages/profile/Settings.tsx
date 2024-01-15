import styled from "@emotion/styled";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Root = styled.div({
  margin: 14,
});

export default function Settings() {
  return (
    <Root>
      <Stack direction="column" spacing={2} sx={{ maxWidth: "50%", mb: 2 }}>
        <Typography variant="h5">Account Details</Typography>
        <TextField label="Display Name" />
        <TextField label="Last Name" />
      </Stack>
      <Divider />
      <Box sx={{ mb: 2, mt: 2 }}>
        <Stack direction="column" spacing={2} sx={{ maxWidth: "50%", mb: 2 }}>
          <Typography variant="h5">Change Password</Typography>
          <TextField label="Current password" />
          <TextField label="New password" />
          <TextField label="Retype new password" />
        </Stack>
        <Stack
          justifyContent={"flex-end"}
          direction={"row"}
          sx={{ maxWidth: "50%" }}
        >
          <Button variant="contained" color="primary">
            Update
          </Button>
        </Stack>
      </Box>
      <Divider />
      <Stack direction="column" spacing={2} sx={{ mb: 2, mt: 2 }}>
        <Typography variant="h5">Delete Account</Typography>
        <Box sx={{ width: "20%" }}>
          <Button variant="contained" color="primary">
            Delete Account
          </Button>
        </Box>
      </Stack>
    </Root>
  );
}
