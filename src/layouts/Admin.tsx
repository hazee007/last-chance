import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dashboard from "../components/admin";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function AdminLayout() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}
