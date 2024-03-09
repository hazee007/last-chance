import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import useResponsive from "../../hooks/useResponsive";
import { selectCurrentUser } from "../../store/user/selector";

const Root = styled.div({
  margin: 14,
});

export default function Settings() {
  const user = useSelector(selectCurrentUser);
  const smDown = useResponsive("down", "sm");
  return (
    <Root>
      <Stack
        direction="column"
        spacing={2}
        sx={{ maxWidth: smDown ? "70%" : "50%", mb: 2 }}
      >
        <Typography variant="h5">Account Details</Typography>
        <TextField
          label="Display Name"
          value={user?.displayName ?? user?.firstName}
        />
        <TextField label="Last Name" value={user?.lastName} />
        <TextField label="Email" value={user?.email} />
      </Stack>
      <Divider />
      <Box sx={{ mb: 2, mt: 2 }}>
        <Stack
          direction="column"
          spacing={2}
          sx={{ maxWidth: smDown ? "70%" : "50%", mb: 2 }}
        >
          <Typography variant="h5">Change Password</Typography>
          <TextField label="Current password" />
          <TextField label="New password" />
          <TextField label="Retype new password" />
        </Stack>
        <Stack
          justifyContent={smDown ? "start" : "flex-end"}
          direction={"row"}
          sx={{ maxWidth: smDown ? "70%" : "50%" }}
        >
          <Button variant="contained" color="primary">
            Update
          </Button>
        </Stack>
      </Box>
      <Divider />
      <Stack direction="column" spacing={2} sx={{ mb: 2, mt: 2 }}>
        <Typography variant="h5">Delete Account</Typography>
        <Box sx={{ width: smDown ? "50%" : "20%" }}>
          <Button variant="contained" color="primary">
            Delete Account
          </Button>
        </Box>
      </Stack>
    </Root>
  );
}
