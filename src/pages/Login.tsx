import {
  Box,
  Button,
  Divider,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Root = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "60vh",
});

export default function Login() {
  const navigate = useNavigate();
  return (
    <Root>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stack
          direction={"column"}
          spacing={3}
          textAlign={"center"}
          width={400}
        >
          <Box>
            <Typography variant={"body1"}>Last Chance Logo</Typography>
            <Typography variant={"h5"}> Welcome to Last Chance</Typography>
          </Box>

          <TextField id="email-outlined" label="Email" variant="outlined" />
          <TextField
            id="password-outlined"
            label="Password"
            variant="outlined"
          />

          <Box>
            <Typography
              component={Link}
              onClick={() => navigate("/home")}
              variant={"body1"}
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  color: green[800],
                  cursor: "pointer",
                },
              }}
            >
              Don't have an account?
            </Typography>
            <Typography variant={"body1"}>Forgot password?</Typography>
          </Box>

          <Button size="large" variant="contained" color="primary">
            Login
          </Button>
          <Divider />

          <Button size="large" variant="contained">
            Login with Google
          </Button>
        </Stack>
      </Paper>
    </Root>
  );
}
