import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card12() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="https://ci3.googleusercontent.com/proxy/ZZJvh6QxY25F7OzVig2y9533qcYN-t1jqfKO92pyHD5BB4mYvr5T5lpqrMPiS0kJ1dd4darHVRI7noYDI_TUJPj8UC2ADwM2iT80VB5rep8ciclllu1VbBNMkX3qIlVK7U2bdun7XWUQ-Pdz9Om5djNfJETZLcZ_H2Ik1Q=s0-d-e1-ft#https://images.credly.com/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          MicroSoft PowerBi
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Completed Certification course of Microsoft Azure Data Fundamentals using Microsoft Power
Bi conducted by Microsoft
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}