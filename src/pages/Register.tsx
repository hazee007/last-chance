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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleSignInStart, signUpStart } from "../store/user/reducer";
import { selectCurrentUser } from "../store/user/selector";

const Root = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "80vh",
});

const TextLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    color: green[800],
    cursor: "pointer",
  },
});

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitForm = () => {
    if (formState.password !== formState.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const { confirmPassword, ...newFormState } = formState;
    dispatch(signUpStart(newFormState));
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
            <Typography variant={"h5"}> Register with Last Chance</Typography>
          </Box>

          <TextField
            id="firstName-outlined"
            label="First Name"
            variant="outlined"
            required
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
          <TextField
            id="lastName-outlined"
            label="Last Name"
            variant="outlined"
            required
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
          <TextField
            id="email-outlined"
            label="Email"
            variant="outlined"
            required
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          <TextField
            id="password-outlined"
            label="Password"
            variant="outlined"
            required
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
          <TextField
            id="confirm-password-outlined"
            label=" Retype password"
            variant="outlined"
            required
            type="password"
            name="confirmPassword"
            value={formState.confirmPassword}
            onChange={handleChange}
          />

          <Box>
            <TextLink onClick={() => navigate("/login")} variant={"body1"}>
              Already have an account?
            </TextLink>
          </Box>

          <Box>
            <Button
              size="large"
              variant="contained"
              color="primary"
              sx={{ width: "100%", mb: 1 }}
              onClick={submitForm}
            >
              Sign up
            </Button>
            <Divider />
          </Box>

          <Button
            size="large"
            variant="contained"
            onClick={() => dispatch(googleSignInStart())}
          >
            Sign up with Google
          </Button>
        </Stack>
      </Paper>
    </Root>
  );
}
