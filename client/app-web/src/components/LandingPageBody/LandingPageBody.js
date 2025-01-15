import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import nexusTheme from '../../styles/theme';
import SpaIcon from '@mui/icons-material/Spa';


const LandingPageBody = () => {

  return (
    
    <main>
      <Box theme={nexusTheme} sx={{ height: '70vh', paddingTop: '40px'}}>
        <Grid container spacing={2}>
          <Grid size={6} alignContent={'center'} sx={{ paddingLeft: { xs: '5vw', sm: '5vw', md: '10vw' } }}>
              <Typography fontSize="2rem" >Became the boss of your</Typography>
              <Typography fontSize="7rem" fontWeight={'bold'} marginBottom={-5}>Mental</Typography>
              <Typography fontSize="7rem" fontWeight={'bold'} marginTop={-5}>Health.</Typography>
              <Button variant="contained" color="primary" sx={{ margin: '10px 0'}}>
                Get Started
              </Button>
          </Grid>
          <Grid align="center" size={6} >
            
            <SpaIcon sx={{ fontSize: 400 }}/>

          </Grid>
        </Grid>
       
      </Box>
    </main>
    
  );
};

export default LandingPageBody;
