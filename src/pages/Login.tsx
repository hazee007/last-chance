import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

import { emailSignInStart, googleSignInStart } from "../store/user/reducer";
import { selectCurrentUser } from "../store/user/selector";
import { UserData } from "../types";

const Root = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "60vh",
});

const TextLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    color: green[800],
    cursor: "pointer",
  },
});

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user: UserData | null = useSelector(selectCurrentUser);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitForm = () => {
    console.log(formState);
    dispatch(emailSignInStart(formState));
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

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

          <TextField
            id="email-outlined"
            label="Email"
            variant="outlined"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          <TextField
            id="password-outlined"
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />

          <Stack direction={"column"}>
            <TextLink onClick={() => navigate("/register")} variant={"body1"}>
              Don't have an account?
            </TextLink>
            <TextLink variant={"body1"}>Forgot password?</TextLink>
          </Stack>

          <Box>
            <Button
              size="large"
              variant="contained"
              color="primary"
              sx={{ width: "100%", mb: 1 }}
              onClick={submitForm}
            >
              Login
            </Button>
            <Divider />
          </Box>

          <Button
            size="large"
            variant="contained"
            onClick={() => dispatch(googleSignInStart())}
          >
            Login with Google
          </Button>
        </Stack>
      </Paper>
    </Root>
  );
}
