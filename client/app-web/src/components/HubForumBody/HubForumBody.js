import React from 'react';
import { Box, Typography, Container, Stack, Drawer } from '@mui/material';
import ResponsiveDrawer, { PostItem } from './HubFormBodyComponents';
import Grid from '@mui/material/Grid2';


const HubFormBody = () => {
    return ( 
        <main >  
            <Grid direction="row" container 
                sx={{
                    width: '100vw',
                    display: 'flex'
                }}
            >   
                {/**This item holds the drawer on the left side */}
                <Grid item sx={{width: {xs: '0%', sm: '0%', md: '21%'}, height: {xs: '0vh'}}}>
                    <ResponsiveDrawer></ResponsiveDrawer>
                </Grid>

                {/**This item holds the posts on the right side */}
                <Grid item sx={{width: {xs: '100%', sm: '100%%', md: '79%'}, justifyContent: {xs: 'center', sm: 'center', md: 'center', lg: 'flex-start'}, display: 'flex'}}>
                    <Container sx={{height: '100vh'}}>
                        <Typography fontSize={'40px'} sx={{paddingTop: '75px'}}><b>My Hub</b></Typography>
                        <PostItem 
                            title="I'm having trouble sleeping at night, please help me." 
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
                        </PostItem>  
                        <PostItem 
                            title="I'm depressed. This is a call for help." 
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."> 
                        </PostItem>  
                    </Container>
                </Grid>
            </Grid>
        </main>
    );
};

export default HubFormBody;