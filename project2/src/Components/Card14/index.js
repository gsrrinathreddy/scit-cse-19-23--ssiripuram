import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card14() {
  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="265"
          image="https://www.rlogical.com/wp-content/uploads/2023/03/MERN-Stack-considered-the-Best-for-Developing-Web-Apps.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Full Stack Web Development (MERN)
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Completed Certification course of Full Stack Web Development using MongoDB, Express, React, Node.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}