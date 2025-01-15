// src/styles/theme.js
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Define your colors
const nexusTheme = createTheme({
  palette: {
    primary: {
      main: "#6c7c59" // Reseda green
    },
    secondary: {
      main: "#FAEBCF", // Mindaro
      // Emerald 45503b
    },
  
    info: {
      main: "#b8f2e6", // Tiffany blue
    },
    background: {
      default: "#45503b", // Payne's gray
    },
    text: {
      primary: "#FFFFFF", // White
      // main: "#45503b", // Ebony
    },
  },
  typography: {
    // fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontFamily: '"Libre Franklin", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 300,
    },
  },
});

export default nexusTheme;
