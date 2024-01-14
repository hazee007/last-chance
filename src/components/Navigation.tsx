import { Stack } from "@mui/material";
import Breadcrumbs from "./Breadcrumbs";
import Search from "./Search";

export default function Navigation() {
  return (
    <Stack
      sx={{ mt: 1, mb: 1 }}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Breadcrumbs />
      <Search />
    </Stack>
  );
}
