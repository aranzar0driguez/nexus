import React from 'react';
import { LandingPage } from './pages';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import nexusTheme from './styles/theme';

const App = () => {

  return (
    <ThemeProvider theme={nexusTheme}>
      <CssBaseline />
      {/* Your application components go here */}
      <div>
      <LandingPage/>
    </div>
    </ThemeProvider>
  );
};

export default App;
