import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import nexusTheme from '../../styles/theme';
import SpaIcon from '@mui/icons-material/Spa';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';


const images = [
  {
    url: 'https://media.istockphoto.com/id/1224548497/vector/stop-cyberbullying-depressed-girl-suffering-from-online-harassment-isolated-vector.jpg?s=612x612&w=0&k=20&c=2ZnuiM54Bjvrkuq5SIE9ItPj7fxhSZnOUTIUk0fznWc=',
    title: 'Depression',
    width: '30%',
  },
  {
    url: 'https://cdn.vectorstock.com/i/500p/50/40/headache-depression-anxiety-concept-vector-34645040.jpg',
    title: 'Anxiety',
    width: '30%',
  },
  {
    url: 'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/2/8b/28bd1412-57ca-11ee-b159-17774cffb1b7/650b0f4c09cfc.image.jpg',
    title: 'PTSD',
    width: '30%',
  },
]

/* 
  The following code is taken from the MUI API documentation
  It can be accessed at the following link: 
  https://mui.com/material-ui/react-button/
  */
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  borderRadius: '25px',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  borderRadius: '25px'
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  borderRadius: '25px'
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
  borderRadius: '25px',
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

/* - - - END OF MUI API CODE - - -*/

const LandingPageBody = () => {

  return (
    
    <main>
      {/* First section of the landing page */}

      <Box theme={{nexusTheme}} sx={{ height: '75vh', paddingTop: '40px', background: 'linear-gradient(to right,rgb(72, 120, 78),rgb(49, 87, 49))',}}>
        <Grid container spacing={2}>
          <Grid size={6} alignContent={'center'} sx={{ paddingLeft: { xs: '5vw', sm: '5vw', md: '15vw' } }}>
              <Typography fontSize="2rem" >Became the boss of your</Typography>
              <Typography fontSize="7rem" fontWeight={'bold'} marginBottom={-5}>Mental</Typography>
              <Typography fontSize="7rem" fontWeight={'bold'} marginTop={-5}>Health.</Typography>
              <Button variant="contained" color="secondary" sx={{ margin: '10px 0', color: "primary"}}>
                Get Started
              </Button>
          </Grid>
          <Grid align="center" size={6} >
            
            <SpaIcon sx={{ fontSize: 400, filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.8))" }}/>

          </Grid>
        </Grid>
      </Box>

    {/* Community Hub Section */}
    <Box theme={nexusTheme} sx={{ height: '70vh', backgroundColor: "white", color: "black"}}>
        <Typography variant='h3' fontWeight={'bold'} padding={5} textAlign={'center'}>
          Community Hubs
        </Typography>

        <Container maxWidth="md" alignContent={'center'}>

        {/* The following code is obtained from the MUI documentation */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "space-between"}}>
            {images.map((image) => (

            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={(theme) => ({
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: `calc(${theme.spacing(1)} + 6px)`,
                })}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
          ))}
        </Box>
      {/* - - - End of MUI code - - - */}

        </Container>
    </Box>
    </main>
    
  );
};

export default LandingPageBody;
