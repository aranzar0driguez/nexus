import React from 'react';
import { Stack, Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import nexusTheme from '../../styles/theme';
import SpaIcon from '@mui/icons-material/Spa';
import HubIcon from '@mui/icons-material/Hub';
import { AccordionListItem, HubImagesIcons, AboutNexusContainer } from './LandingPageComponents';

const LandingPageBody = () => {

  return (
    
    <main>
      {/* First section of the landing page */}

      <Box theme={{nexusTheme}} sx={{ height: '80vh', paddingTop: '17vh', background: 'linear-gradient(to right,rgb(72, 120, 78),rgb(49, 87, 49))',}}>
        <Grid container spacing={2}>
          <Grid size={6} alignContent={'center'} sx={{ paddingLeft: { xs: '5vw', sm: '5vw', md: '15vw' } }}>
              <Typography fontSize="2rem" >Become the boss of your</Typography>
              <Typography fontSize="7rem" fontWeight={'bold'} marginBottom={-5}>Mental</Typography>
              <Typography fontSize="7rem" fontWeight={'bold'} marginTop={-5}>Health.</Typography>
              <Button variant="contained" color="secondary" sx={{ margin: '10px 0', color: "primary", borderRadius: '25px'}}>
                Take the Quiz
              </Button>
          </Grid>
          <Grid align="center" size={6} >
            
            <SpaIcon sx={{ fontSize: 400, filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.8))" }}/>

          </Grid>
        </Grid>
      </Box>

    {/* Community Hub Section (background)*/}
    <Box theme={nexusTheme} sx={{ height: 'auto', backgroundColor: "#FAEBCF", color: "black", display: "flex", justifyContent: "center", paddingBottom: "6rem"}}>
        
        {/* Creates a grid for the left side (text) and the right side (images) */}
        <Grid container spacing={3} sx={{ height: '100%', paddingTop: '15vh', maxWidth: 'lg'}}>
                  
        {/* Left side of grid (text) */}
        <Grid size={5} textAlign={'left'} sx={{paddingBottom: '20px'}}>
          
          <Typography variant='h3' color="white" fontWeight={'bold'} textAlign={'left'} width={'fit-content'} sx= {{backgroundColor: "green", boxShadow: "10px 10px black"}}>
            Community Hubs
          </Typography>

          <Typography fontSize="1.4rem" textAlign={'left'} sx={{paddingTop: '20px'}}>
            After completing a brief quiz, you will get placed into one of the following hubs where you'll 
            be able to connect with likeminded people. 
          </Typography>

          <Button variant="contained" sx={{marginTop: "4vh", borderRadius: '25px'}}>
            Get Started
          </Button>

        </Grid>

        {/* Right side of grid (images) */}
        <Grid size={7}>
        {/* 
          The following code is obtained from the MUI documentation. This code 
          draws the cells with the images 
        */}
          <HubImagesIcons></HubImagesIcons>
      {/* - - - End of MUI code - - - */}
      </Grid>

      </Grid>
    </Box>

    {/* Third section of the landing page */}
    <section>
      <Box theme={nexusTheme} sx={{ height: 'auto', backgroundColor: "primary", display: "flex", alignItems: "center", paddingBottom: "6rem", flexDirection: "column"}}>
          
          <Typography variant='h3' color="white" sx={{padding: "4vh 0"}}>
            How does Nexus work?
          </Typography>

          <Stack spacing={3} direction="row"  >

          <AboutNexusContainer display="flex" flexDirection="row">
          <div>
            <AccordionListItem listTitle={'Take a quiz'} listDescription={'This is where we would put some description about this step.'}/>
            <AccordionListItem listTitle={'Get placed into a hub'} listDescription={'This is where we would put some description about this step.'}/>
            <AccordionListItem listTitle={'Connect with our community'} listDescription={'This is where we would put some description about this step.'}/>
          </div>
          </AboutNexusContainer>
          <AboutNexusContainer justifyContent="center">
            <HubIcon color="white" sx={{fontSize: 330}}/>
          </AboutNexusContainer>
          </Stack>
      </Box>
    </section>
    </main>
    
  );
};

export default LandingPageBody;
