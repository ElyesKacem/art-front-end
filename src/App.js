import logo from './logo.svg';
import header from './ah.jpg';
import footer from './ahf.jpg';
import './App.css';
import TemporaryDrawer from './components/TemporaryDrawer';
import { Container, Grid, TextField } from '@mui/material';
import MediaCard from './components/card';
import axios from 'axios';
import React from 'react';
import Navbar from './components/navbar';

function App() {
  const [artList, setArtList] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [searchTable, setSearchTable] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3000/api/artworks").then((response) => {
      console.log("inside axios", response.data);
      setArtList(response.data.artworks);
      setSearchTable(response.data.artworks);
    });
    // console.log("justafter axios", artList);
  }, []);
  // console.log("after the use effect", artList)
React.useEffect(() => {
  let newTable=artList.filter((art)=>art.title.toLowerCase().includes(search.toLowerCase()))
  setSearchTable(newTable);

  
}, [search])

  return (
    <div>
      <Navbar />
      <img src={header} />
      
        <TemporaryDrawer />
        <br />
        <br />
        <Container>
        <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e)=>{
          setSearch(e.target.value);
          console.log(e.target.value);

        }}/>
        <br />
        <br />
          <Grid Container >
            <Grid container spacing={5}>
              {searchTable.map(art => {
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

    
      <div className="footer">
        <img src={footer} />

      </div>
    </div>
  );
}

export default App;
