import React from 'react';
import { Stack, Typography, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import nexusTheme from '../../styles/theme';
import SpaIcon from '@mui/icons-material/Spa';
import { HubImagesIcons, AboutNexusItem } from './LandingPageComponents';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';

const LandingPageBody = () => {

  return (
    
    <main>
      {/* First section of the landing page */}
      {/* size={6}  */}
      <Box theme={{nexusTheme}} sx={{ height: 'auto', paddingTop: '5vh', paddingBottom: '10vh', background: 'linear-gradient(to right,rgb(72, 120, 78),rgb(49, 87, 49))',}}>
        <Grid 
          container spacing={2} 
          sx= {{
            flexDirection: {xs: 'column-reverse', sm: 'column-reverse', md: 'row'},
            alignItems: {xs: 'center', sm: 'center'}
          }}> 
            
          <Grid 
            alignContent={'center'}
            item
            sx={{ 
              textAlign: {xs: 'center', sm: 'center', md: 'right'},
              width: {xs: '100%', sm: '100%', md: '40%'}
            }}>

              <Typography 
                sx={{ fontSize: 'clamp(20px, 2.5vw, 32px)'}}>
                Become the boss of your
              </Typography>
              
              <Typography 
                fontWeight={'bold'} 
                sx={{ fontSize: 'clamp(30px, 7.5vw, 112px)', lineHeight: 1}}>
                Mental
              </Typography>

              <Typography 
                fontWeight={'bold'} 
                sx={{ fontSize: 'clamp(30px, 7.5vw, 112px)', lineHeight: 1}}>
                Health.
              </Typography>

              <Button 
                variant="contained" 
                color="secondary" 
                sx={{ margin: '10px 0', color: "primary", borderRadius: '25px'}}>
                Take the Quiz
              </Button>

          </Grid>
          <Grid align="center" sx={{width: {xs: '100%', sm: '100%', md: '58%'}}}>
            
            <SpaIcon sx={{ fontSize: 'clamp(300px, 35.0vw, 400px)', filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.8))" }}/>

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

          <Typography fontSize="1.35rem" textAlign={'left'} sx={{paddingTop: '20px'}}>
            After completing a brief quiz, you will get placed into one of the following hubs where you'll 
            be able to connect with likeminded people. 
          </Typography>

          <Button variant="contained" sx={{marginTop: "4vh", borderRadius: '25px'}}>
            Get Started
          </Button>

        </Grid>

        {/* Right side of grid (images) */}
        <Grid size={7}>
          <HubImagesIcons></HubImagesIcons>
      </Grid>

      </Grid>
    </Box>

    {/* Third section of the landing page */}
    <section>
      <Box theme={nexusTheme} sx={{ height: 'auto', backgroundColor: "primary", display: "flex", alignItems: "center", padding: "5rem 0", flexDirection: "column"}}>
          
          <Typography variant='h3' color="white" sx={{padding: "4vh 0"}}><b>So, how exactly does Nexus work?</b></Typography>

          <Typography variant='h5' color="white" sx={{padding: "4vh 0"}}>Don't worry. Your data is <i>always</i> anonymized.</Typography>

          <Stack spacing={5} direction="row" >
            <AboutNexusItem 
              title="Quiz" 
              description="Start by taking a short quiz designed to help us better understand your personality and identify any potential mental health concerns."
            />
            <AboutNexusItem 
              icon={PeopleIcon}
              title="Hub" 
              description="After taking our quiz, you will be placed into one of our hubs. Each hub is composed of members that rank of highest similarity to you."
            />
            <AboutNexusItem 
              icon={GroupsIcon}
              title="Community" 
              description="You can also connect with others in our community through an anonymous forum where everyone is invited to share their thoughts!"
            />
          </Stack>
      </Box>
    </section>
    </main>
    
  );
};

export default LandingPageBody;
