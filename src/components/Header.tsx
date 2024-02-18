import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Person from "./Person";

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Last Chance
          </Typography>
          <Button href="/home" variant="text" color="inherit">
            Home
          </Button>
          <Button href="/shop" variant="text" color="inherit">
            Shop
          </Button>
          <Button href="/cart" variant="text" color="inherit">
            Cart
          </Button>
          {/* <Button href="/profile" variant="text" color="inherit">
            Profile
          </Button> */}
          <Person />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
