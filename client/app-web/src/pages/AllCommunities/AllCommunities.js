import React from "react";
// import { Drawer } from "../../components";
import { Typography, Box, List, ListItem, Stack } from "@mui/material";
import { ResponsiveDrawer, CommunityCard } from "../../components";

//Emulate API request of all communities from table
var communities = {
  data: [
    {
      id: "1",
      CommunityName: "Depression",
      CommunityDescription: "A hub for all things depression!",
    },
    {
      id: "2",
      CommunityName: "Social Anxiety",
      CommunityDescription: "A hub for all things Social Anxiety!",
    },
    {
      id: "3",
      CommunityName: "BiPolar",
      CommunityDescription: "A hub for all things biPolar!",
    },
  ],
};

const Cards = () => {
  return (
    <>
      <List>
        {communities.data.map((community) => (
          <ListItem key={community.id}>
            <CommunityCard
              id={community.id}
              name={community.CommunityName}
              description={community.CommunityDescription}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

const AllCommunities = () => {
  return (
    <Box
      Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right,rgb(72, 120, 78),rgb(49, 87, 49))",
      }}
    >
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <ResponsiveDrawer />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ paddingTop: "20px", variant: "h4" }}>
            Our Communities!
          </Typography>
          <Cards />
        </Box>
      </Box>
    </Box>
  );
};

export default AllCommunities;
