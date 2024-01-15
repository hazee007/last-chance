import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, lime } from "@mui/material/colors";

import Router from "./routes";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: lime[500],
      // lime[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
