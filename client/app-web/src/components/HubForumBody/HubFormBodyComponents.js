import { Typography, Container, Stack } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as React from 'react';
import Divider from '@mui/material/Divider';


//  This component displays a singular post
export const PostItem = (props) => {
    return(
        <>
            <Container
                sx={{
                height: 'auto',
                width: '100%',
                border: '.5px solid white',
                borderRadius: '25px',
                paddingTop: '15px',
                paddingBottom: '15px',
                margin: '15px auto'
                }}
            >
                {/*Title*/}
                <Typography fontSize={'21px'} sx={{paddingBottom: '5px'}}><b>{props.post.title}</b></Typography>
                
                {/*Body*/}
                <Typography fontSize={'16px'}>{props.post.description}</Typography>

                <Stack spacing={2} direction={'row'} sx={{textAlign: 'left', paddingTop: '10px'}}>
                    <ChatBubbleIcon sx={{filter: "drop-shadow(4px 4px 5px rgba(0, 0, 0, 1.1))"}}/>
                    <BookmarkIcon sx={{ color: '#FFEE8C', filter: "drop-shadow(4px 4px 5px rgba(0, 0, 0, 1.1))"}}/>
                    <FavoriteIcon sx={{ color: 'red', filter: "drop-shadow(4px 4px 5px rgba(0, 0, 0, 1.1))" }}/>
                </Stack>
                {/**Row of buttons */}
            </Container>
        </>
    );
};

export const RightColumnElement = (props) => {
  
  return (
    <div>
      <Typography variant='h6' paddingBottom={'5px'} fontWeight={'bold'}>{props.header}</Typography>
      <Typography fontSize='1rem'>{props.text}</Typography>
      <Divider color="grey" height='1px' width='100%' sx={{marginTop: '5px', marginBottom: '15px'}}></Divider>
    </div>
  )
}