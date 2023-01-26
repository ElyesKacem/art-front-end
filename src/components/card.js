import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArtInfos from './artInfos';
import ArtWorkUpdateForm from './form/oeuvreUpdateForm';

export default function MediaCard({data}) {
  // console.log(data);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={"http://localhost:3000"+data.snapshotURL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.description}
        </Typography>
      </CardContent>
      <CardActions>
      <ArtWorkUpdateForm id={data.id} data={data}></ArtWorkUpdateForm>
        <ArtInfos id={data.id} />
      </CardActions>
    </Card>
  );
}
