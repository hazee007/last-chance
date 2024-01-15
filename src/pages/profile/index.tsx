import styled from "@emotion/styled";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";

const DesktopSidebar = styled.div({
  height: "100vh",
  width: "200px",
  borderRight: "1px solid #999",
});

const sideMenu = [
  {
    name: "Settings",
    link: "/profile/setting",
  },
  {
    name: "WishList",
    link: "/profile/wishlist",
  },
  {
    name: "My Items",
    link: "/profile/items",
  },
];

const GridBox = styled.div({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
});

export default function Profile() {
  const location = useLocation();
  return (
    <GridBox>
      <DesktopSidebar>
        {sideMenu.map((menu, index) => (
          <List key={index}>
            <ListItemButton
              component={Link}
              to={menu.link ? menu.link : "#"}
              selected={menu?.link === location.pathname}
            >
              <ListItemText primary={menu.name} />
            </ListItemButton>
          </List>
        ))}
      </DesktopSidebar>
      <Box>
        <Outlet />
      </Box>
    </GridBox>
  );
}
