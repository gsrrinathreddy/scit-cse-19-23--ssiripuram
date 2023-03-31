import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { fontSize, style } from '@mui/system';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', p: 4}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src="https://www.collegedekho.com/_next/image?url=https%3A%2F%2Fimg.collegedekhocdn.com%2Fmedia%2Fimg%2Finstitute%2Flogo%2F1434463349.jpg&w=48&q=75" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences, (Karimnagar)"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'}} 
                component="span"
                variant="body2"
                color="text.primary"
              >
                8.3 CGPA<br/>
                2019-2023
              </Typography><br/>
              
              {" B.Tech (Computer Science and Engineering)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="https://upload.wikimedia.org/wikipedia/en/1/12/TSBIE_Logo.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Sarada Junior College, (Siricilla)"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                95% <br/>
                2017-2019
              </Typography><br/>
              {"Intermediate (MPC)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/04/27/676273-telangana-logo-edit.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Geervani Vidyaniketan High School, (Siricilla)"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                9.3 CGPA<br/>
                2017
              </Typography><br/>
              {'SSC'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}