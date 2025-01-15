import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SpaIcon from '@mui/icons-material/Spa';
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import nexusTheme from "../../styles/theme";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navbar() {
  return (
    <AppBar position="static" theme={nexusTheme} color="secondary">
      <Toolbar>
        {/* Logo and App Name on the left */}
        <IconButton edge="start" color="inherit" aria-label="logo">
          {/* <img src="/logo.png" alt="App Logo" style={{ width: 40 }} /> */}
          <SpaIcon color="main" sx={{ fontSize: 35 }}/>
          </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nexus
        </Typography>

        {/* Search Bar in the middle */}
        <Box sx={{ flexGrow: 2, display: "flex", justifyContent: "center" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>

        {/* Login and Settings Icon on the right */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
