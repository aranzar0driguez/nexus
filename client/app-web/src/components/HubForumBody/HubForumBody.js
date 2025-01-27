import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { PostItem, RightColumnElement } from './HubFormBodyComponents';
import ResponsiveDrawer from '../Drawer/Drawer';
import Posts from "../../data/posts";
import nexusTheme from '../../styles/theme';
import Grid from '@mui/material/Grid2';


const HubFormBody = () => {

    const postElements = Posts.map((post) => {
        return (
            <PostItem
                key={post.id}
                post={post}
            />
        )
    })

    return ( 
        <main >  
            <Grid direction="row" container 
                sx={{
                    width: '100vw',
                    display: 'flex'
                }}
            >   
                {/**This item holds the drawer on the left side */}
                <Grid item sx={{width: {xs: '0%', sm: '0%', md: '20%'}, height: {xs: '0vh'}}}>
                    <ResponsiveDrawer></ResponsiveDrawer>
                </Grid>

                {/**This item holds the posts on the middle side */}
                <Grid item sx={{width: {xs: '100%', sm: '100%%', md: '60%'}, justifyContent: {xs: 'center', sm: 'center', md: 'center', lg: 'flex-start'}, display: 'flex', overflowY: 'auto'}}>
                    <Container sx={{height: '100vh'}}>
                        <Typography fontSize={'40px'} 
                            sx={{
                                width: 'fit-content',
                                height: 'fit-content',
                                display: 'block',
                                backgroundColor: nexusTheme.palette.primary.main,
                                boxShadow: "10px 10px black", 
                                margin: {xs: 'auto', sm: 'auto', md: '20px 0px'}
                            }}><b>My Hub</b>
                        </Typography>
                        
                        {/** Lists all of the elements from the JSON file */}
                        {postElements}

                    </Container>
                </Grid>

                {/**This item holds the right side of the screen*/}
                <Grid sx={{width: {xs: '0%', md: '20%'}, height: '100vh', position: 'sticky'}}>
                    <Container sx={{height: '100vh', paddingTop: '75px'}}>
                        <Typography fontSize="30px" fontWeight={'bold'}></Typography>
                        
                        <RightColumnElement header={"Quote of the day"} text="Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN."></RightColumnElement>

                        <RightColumnElement header={"Meditation of the week"} text={`To begin, follow these steps:\n1. Close your eyes\n2. Breathe deeply`}></RightColumnElement>

                    </Container>
                </Grid>

            </Grid>
        </main>
    );
};

export default HubFormBody;