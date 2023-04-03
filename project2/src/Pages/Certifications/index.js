import { Grid } from '@mui/material';
import Card12 from '../../Components/Card12';
import Card14 from '../../Components/Card14';
// import { Axios } from 'axios';

export default function Certification(){
    return(
      <>
        <Grid container sx={{ p: 4 }} spacing={4}>
          <Grid item xs={4}>
        <Card12/>
        </Grid>
        <Grid item xs={4}>
        <Card14/>
        </Grid>
        </Grid>
        </>
    )
}