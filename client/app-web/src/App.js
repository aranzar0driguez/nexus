import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import nexusTheme from "./styles/theme";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <ThemeProvider theme={nexusTheme}>
      <CssBaseline />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element}></Route>
        ))}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
