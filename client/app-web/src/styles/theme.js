// src/styles/theme.js
import { createTheme } from "@mui/material/styles";

// Define your colors
const nexusTheme = createTheme({
  palette: {
    primary: {
      main: "#aed9e0", // Office green
    },
    secondary: {
      main: "#faf3dd", // Emerald
    },
    info: {
      main: "#b8f2e6", // Tiffany blue
    },
    background: {
      default: "#faf3dd", // Payne's gray
    },
    text: {
      primary: "#5e6472", // Oxford blue
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default nexusTheme;
