import { useNavigate } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import useResponsive from "../hooks/useResponsive";

import Person from "./Person";

const MobileMenu = () => {
  const navigate = useNavigate();
  const smDown = useResponsive("down", "sm");
  return (
    <>
      {!smDown ? (
        <>
          <Button href="/home" variant="text" color="inherit">
            Home
          </Button>
          <Button href="/shop" variant="text" color="inherit">
            Shop
          </Button>

          <IconButton
            size="large"
            color="inherit"
            aria-label="cart"
            onClick={() => navigate("/cart")}
          >
            <LocalMallOutlinedIcon />
          </IconButton>

          <Person />
        </>
      ) : (
        <Stack direction={"row"}>
          <IconButton
            size="large"
            color="inherit"
            aria-label="cart"
            onClick={() => navigate("/cart")}
          >
            <LocalMallOutlinedIcon />
          </IconButton>

          <Person />
        </Stack>
      )}
    </>
  );
};

export default function Header() {
  const smDown = useResponsive("down", "sm");

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {smDown ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Last Chance
            </Typography>
          )}

          <MobileMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
