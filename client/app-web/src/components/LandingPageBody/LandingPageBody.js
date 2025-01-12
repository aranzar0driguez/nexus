import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const LandingPageBody = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to Your Mental Health Community
      </Typography>
      <Typography variant="h6" gutterBottom>
        Connect with others, share your experiences, and find support.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
};

export default LandingPageBody;
