import { Typography, Container, Stack, Button } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as React from 'react';
import Divider from '@mui/material/Divider';


export const PostTag = (props) => {
  return (
    <>
      <div  
        style={{
          backgroundColor: props.color, 
          color: 'black',
          width: 'fit-content', 
          height: 'fit-content', 
          padding: "1px 7px",
          borderRadius: "20px",
          marginBottom: "5px"
        }}>
        <Typography sx={{margin: '0px 0px'}}>{props.tag}</Typography>
          </div>
    </>
  )
}

//  This component displays a singular post
export const PostItem = (props) => {
    return(
        <>
            <Container
                sx={{
                height: 'auto',
                width: '85%',
                border: '1px solid white',
                borderRadius: '25px',
                paddingTop: '15px',
                paddingBottom: '15px',
                margin: '30px auto'
                }}
            >
                {/*Title*/}
                <Typography fontSize={'21px'} sx={{paddingBottom: '5px'}}><b>{props.post.title}</b></Typography>
                

                {/*Tag + date*/}
                <div  style={{
                  display: 'flex',
                  gap: '10px'
                  }}>
                  <PostTag tag={props.post.tag} color={props.post.color}></PostTag>
                  <Typography>•  1/27/2024 </Typography>
                </div>

                {/*Body*/}
                <Typography fontSize={'16px'}>{props.post.description}</Typography>

                {/**Buttons */}
                <Stack spacing={2} direction={'row'} sx={{textAlign: 'left', paddingTop: '10px'}}>
                    <ChatBubbleIcon sx={{filter: "drop-shadow(4px 4px 5px rgba(0, 0, 0, 1.1))"}}/>

                    <BookmarkIcon sx={{ color: '#FFEE8C', filter: "drop-shadow(4px 4px 5px rgba(0, 0, 0, 1.1))"}}/>

                    <FavoriteIcon sx={{ color: 'red', filter: "drop-shadow(4px 4px 5px rgba(0, 0, 0, 1.1))" }}/>
                </Stack>

            </Container>
        </>
    );
};

export const RightColumnElement = (props) => {
  
  return (
    <div>
      <Typography variant='h6' paddingBottom={'5px'} fontWeight={'bold'}>{props.header}</Typography>
      <p fontSize='1rem'>{props.text}</p>
      <Divider color="white" height='1px' width='100%' sx={{marginTop: '5px', marginBottom: '15px'}}></Divider>
    </div>
  )
}