import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">My Hobbies</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/RichardDai/phpSWK2Un.jpeg',
    title: 'Chess',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.indianexpress.com/2022/12/feature-photo-3.jpg?w=640',
    title: 'Puzzles',
    
  },
  {
    img: 'https://www.shutterstock.com/image-vector/programming-code-coding-hacker-background-600w-1714491562.jpg',
    title: 'Coding',
    
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/02/27/16/55/read-652384_960_720.jpg',
    title: 'Reading',
    
    cols: 2,
  },
  {
    img: 'https://www.shutterstock.com/image-illustration/3d-illustration-musical-notes-signs-600w-761313844.jpg',
    title: 'Music',
    
    cols: 2,
  },
  {
    img: 'https://thumbs.dreamstime.com/z/chef-cooking-harmony-woman-food-big-pot-89485044.jpg',
    title: 'Cooking',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  
];