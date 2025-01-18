import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import SpaIcon from '@mui/icons-material/Spa';
// import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
// import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import nexusTheme from "../../styles/theme";
import '../../styles/landingpage.css';

const NavBarButton = styled(Button)(({ theme }) => ({
  color: "white",
  fontSize: "0.8rem",
  borderRadius: "20px",
  font: theme.typography.fontFamily,
  transition: "color 0.5s",

  "&:hover": {
    color: "black",
  },
}));

const NavButtonsDiv = styled("div")(({ theme }) => ({
  backgroundColor: "rgba(113, 174, 124, 0.2)",
  borderRadius: "25px",
  height: "auto",
  padding: "7px"

}));


function Navbar() {

  /* Creates a navbar variable that holds the current state, 
    and setNavbar is the function you can use to modify the 
    state. This code helps change the navbar's color when the
    user scrolls.*/
  const [navbar, setNavbar] =  useState(false);
  const changeNavBarColor = () => {

    if (window.scrollY >= 40) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  /* Whenever scroll is equal to true, it makes changeNavBarColor also equal to true*/
  window.addEventListener('scroll', changeNavBarColor)

  return (
    <AppBar className={navbar ? 'navbar active' : 'navbar'} position="fixed" theme={nexusTheme} color="linear-gradient(to right,rgb(72, 120, 78),rgb(49, 87, 49))" sx={{ boxShadow: 'none'}}>
      <Toolbar>
        {/* Logo and App Name on the left */}
        <IconButton edge="start" color="inherit" aria-label="logo">
          <SpaIcon color="main" sx={{ fontSize: 35 }}/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nexus
        </Typography>


        <Box sx={{width: "100%", flexGrow: 1, display: "flex", justifyContent: "center"}}>
          <NavButtonsDiv>
            <Stack direction="row" spacing={3}>
              <NavBarButton color='inerit'>Home</NavBarButton>
              <NavBarButton color='inherit'>Learn More</NavBarButton>
              <NavBarButton color='inherit'>Hubs</NavBarButton>
              <NavBarButton color='inherit'>Get Started</NavBarButton>
              <NavBarButton color='inherit'>Log In</NavBarButton>
            </Stack>
          </NavButtonsDiv>
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
