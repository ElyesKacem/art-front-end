import logo from './logo.svg';
import header from './ah.jpg';
import footer from './ahf.jpg';
import './App.css';
import TemporaryDrawer from './components/TemporaryDrawer';
import { Container, Grid } from '@mui/material';
import MediaCard from './components/card';
import axios from 'axios';
import React from 'react';

function App() {
  const [artList, setArtList] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3000/api/artworks").then((response) => {
      console.log("inside axios", response.data);
      setArtList(response.data.artworks);
    });
    console.log("justafter axios", artList);
  }, []);
  console.log("after the use effect", artList)

  return (
    <div>
      <img src={header} />
      <header>
        <TemporaryDrawer />
        <Container>
          <Grid Container >
            <Grid container spacing={5}>
              {artList.map(art => {
                return (
                  <Grid item xs={3}>
                    <MediaCard data={art}></MediaCard>
                  </Grid>
                );
              })}
            </Grid>
            <br />
            <br />

          </Grid>
        </Container>

      </header>
      <div className="footer">
        <img src={footer} />

      </div>
    </div>
  );
}

export default App;
