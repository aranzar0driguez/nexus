import { Container, Stack, Typography, Button, Box, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import nexusTheme from '../../styles/theme';
import QuizIcon from '@mui/icons-material/Quiz';

/* 
  The following code is taken from the MUI API documentation
  It can be accessed at the following link: 
  https://mui.com/material-ui/react-button/
  */
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
    {
      url: 'https://media.istockphoto.com/id/1224548497/vector/stop-cyberbullying-depressed-girl-suffering-from-online-harassment-isolated-vector.jpg?s=612x612&w=0&k=20&c=2ZnuiM54Bjvrkuq5SIE9ItPj7fxhSZnOUTIUk0fznWc=',
      title: 'PTSD',
      width: '30%',
    },
    {
      url: 'https://cdn.vectorstock.com/i/500p/50/40/headache-depression-anxiety-concept-vector-34645040.jpg',
      title: 'Stress',
      width: '30%',
    },
    {
      url: 'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/2/8b/28bd1412-57ca-11ee-b159-17774cffb1b7/650b0f4c09cfc.image.jpg',
      title: 'Insomnia',
      width: '30%',
    },
  ]
  
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
  

  
  export const AboutNexusItem = ({ icon: Icon = QuizIcon, title, description }) => {
    return(
      <>
        <Box  
         sx={{
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '15px',
          width: { xs: '80vw', sm: '30vw' },
        }}
        >
          <Icon sx={{ fontSize: 100, filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 1))"}} />
          <Typography sx={{fontSize: 'clamp(25px, 3.0vw, 35px)'}}><b>{title}</b></Typography>
          <Typography textAlign={"center"} sx={{fontSize: 'clamp(16px, 1.7vw, 18px)'}}>{description}</Typography>
        </Box>
      </>
    )
  }
  
  export const HubImagesIcons = () => {
    return (
      <>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "space-between", gap: 2.5}}>
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
                <Typography component="span" variant="subtitle1" color="inherit"
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
            </>
    );
  };
  