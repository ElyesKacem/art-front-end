import logo from './logo.svg';
import header from './ah.jpg';
import footer from './ahf.jpg';
import './App.css';
import TemporaryDrawer from './components/TemporaryDrawer';
import { Container, Grid } from '@mui/material';
import MediaCard from './components/card';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
        <img src={header} />
      <header>
      <TemporaryDrawer/>
        <Container>
      <Grid Container >
      <Grid container spacing={5}>
  <Grid item xs={3}>
    <MediaCard>1</MediaCard>
  </Grid>
  <Grid item xs={3}>
    <MediaCard>2</MediaCard>
  </Grid>
  <Grid item xs={3}>
    <MediaCard>3</MediaCard>
  </Grid>
  <Grid item xs={3}>
    <MediaCard>4</MediaCard>
  </Grid>
  <Grid item xs={3}>
    <MediaCard>1</MediaCard>
  </Grid>
  <Grid item xs={3}>
    <MediaCard>2</MediaCard>
  </Grid>
  <Grid item xs={3}>
    <MediaCard>3</MediaCard>
  </Grid>
  <Grid item xs={3}>
    <MediaCard>4</MediaCard>
  </Grid>
  <Grid item xs={3}>
    <MediaCard>1</MediaCard>
  </Grid>
  <Grid item xs={3}>
    <MediaCard>2</MediaCard>
  </Grid>
  <Grid item xs={3}>
    <MediaCard>3</MediaCard>
  </Grid>
  <Grid item xs={3}>
    <MediaCard>4</MediaCard>
  </Grid>
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
