import React from "react";
import { Navbar } from "../../components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, Button, Card, CardContent } from "@mui/material";

import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LoginNavbar from "./LoginNavbar";
const Login = () => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right, rgb(72, 120, 78), rgb(49, 87, 49))",
        minHeight: "100vh", // Ensure it covers the full height of the viewport
        display: "flex", // Allow flexbox behavior
        flexDirection: "column", // Stack elements vertically
      }}
    >
      <LoginNavbar></LoginNavbar>
      <Box
        style={{
          height: "90vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginTop: "5%",
        }}
      >
        {/* {console.log(nexusTheme.palette.primary.main)} */}
        <Card
          sx={{
            background: "white",
            borderRadius: "25px",
            width: "100%",
            maxWidth: "500px",
          }}
        >
          <CardContent sx={{}}>
            <Stack alignItems="center" spacing={2} sx={{}}>
              <Typography color="black" fontWeight="bold" variant="h4">
                Log in
              </Typography>
              <Typography color="black">
                New to Nexus? <Link to="/">Register here!</Link>
              </Typography>
            </Stack>
            <Stack spacing={1} sx={{ alignItems: "center", paddingTop: "8px" }}>
              <TextField
                sx={{
                  width: "450px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black", // Change border color
                    },
                    "&:hover fieldset": {
                      borderColor: "lightgray", // Change border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green", // Change border color when focused
                    },
                    "& input": {
                      color: "black", // Change the input text color to black
                    },
                  },
                }}
                label="Username"
                variant="outlined"
              />
              <TextField
                sx={{
                  width: "450px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black", // Change border color
                    },
                    "&:hover fieldset": {
                      borderColor: "lightgray", // Change border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "green", // Change border color when focused
                    },
                    "& input": {
                      color: "black", // Change the input text color to black
                    },
                  },
                }}
                label="Password (8+ Characters)"
                variant="outlined"
              />
              <Stack
                direction="row"
                spacing={0}
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "4px",
                  width: "450px",
                  paddingBottom: "4px",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={handleChange} />
                  }
                  label="Remember Me"
                  sx={{
                    "& .MuiFormControlLabel-label": { color: "black" },
                    padding: "0px",
                  }} // Change label color to black
                />

                <Link to="/">Forgot Password?</Link>
              </Stack>
            </Stack>

            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <Button
                sx={{
                  borderRadius: "25px",
                  width: "450px",
                }}
                variant="contained"
              >
                LOGIN
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;
