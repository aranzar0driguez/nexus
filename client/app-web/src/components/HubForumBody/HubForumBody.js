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
        <main style={{backgroundColor: nexusTheme.palette.primary.main}}>  
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
                        <div style={{width: '85%', margin: '0px auto'}}>
                            <Typography fontSize={'40px'} 
                                sx={{
                                    width: 'fit-content',
                                    height: 'fit-content',
                                    display: 'block',
                                    backgroundColor: nexusTheme.palette.background.default,
                                    boxShadow: "10px 10px black", 
                                    margin: {xs: 'auto', sm: 'auto', md: '20px 0px'}
                                }}><b>My Hubs</b>
                            </Typography>
                        </div>
                        
                        {/** Lists all of the elements from the JSON file */}
                        {postElements}

                    </Container>
                </Grid>

                {/**This item holds the right side of the screen*/}
                <Grid sx={{width: {xs: '0%', md: '20%'}, height: '100vh', position: 'sticky'}}>
                    <Container sx={{height: '100vh', paddingTop: '75px'}}>
                        <Typography fontSize="30px" fontWeight={'bold'}></Typography>
                        
                    
                        <RightColumnElement header={"Quote of the day"} text={ <>
                            <i>"Mental health problems don’t define who you are. They are something you experience. 
                            You walk in the rain and you feel the rain, but, importantly, you are not the rain."</i>
                            <br />
                            <br />
                            - John D.
                        </>}></RightColumnElement>

                        <RightColumnElement header={"Meditation of the week"} text={ <>
                            To begin, follow these steps:
                            <br />
                            1. Close your eyes
                            <br />
                            2. Breathe deeply
                        </>}></RightColumnElement>

                        <RightColumnElement header={"Hotline Numbers"} text={<>
                            <u>Suicide Hotline</u>
                            <br />
                            1-800-289-2898
                            <br />

                            <u>Veterans Crisis Line</u>
                            <br />
                            1-800-273-8255 

                            </>}></RightColumnElement>

                    </Container>
                </Grid>

            </Grid>
        </main>
    );
};

export default HubFormBody;