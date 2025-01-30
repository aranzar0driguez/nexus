import React from "react";
import { CardContent, Card, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export default function CommunityCard(id, name, description) {
  console.log(id.name);
  return (
    <Box sx={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: "60vw", minWidth: "60vw" }}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ display: "flex", justifyContent: "center", color: "black" }}
            >
              {id.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", justifyContent: "center", color: "black" }}
            >
              {id.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button size="small" color="primary">
            Join +
          </Button>
          <Button size="small" color="primary">
            Open
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
