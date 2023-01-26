import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import ArtisteInfos from './artistInfo';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {


 
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ArtInfos(props) {

  React.useEffect(() => {

    axios.get("http://localhost:3000/api/artworks/"+props.id).then((response) => {
      // console.log("inside axios", response.data);
      // console.log("lololo");
      setData(response.data);
      console.log(response.data);
      // console.log(props);
      setShow(true);
    });

    
  }, []);
  


  const [data, setData] = useState({})
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {show && <>
        <Button size="small" variant="outlined" onClick={handleClickOpen}>
        Voir plus
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        // fullWidth={fullWidth}
        // maxWidth={sm}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {data.title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <b>ID : </b> {data.id}
          </Typography>
          
          <Typography gutterBottom>
            <b>Catégorie :</b> {data.category}
          </Typography>
          <Typography gutterBottom>
            <b>Dimension : </b> {data.dimensions}
          </Typography>
          <Typography gutterBottom>
            <b>Dimension 3D :</b> {data.dimensions3d}
          </Typography>
          <Typography gutterBottom>
            <b>Contenu :</b> {data.content}
          </Typography>
          <Typography gutterBottom>
            <b>Description : </b> {data.description}
          </Typography>
          <Typography gutterBottom>
            <b>Date de création : </b> {data.creation_date}
          </Typography>
          <Typography gutterBottom>
            <b>Artiste : </b> {data.artist.fullName}
          <ArtisteInfos id={data.artist.id} />
          </Typography>
          <br />
          <Typography gutterBottom>
            <b>Location de l'arts : </b>
            <ul>
             {!data.artworkLocation==[] && <li>Aucune informaion</li>}
              {data.artworkLocation && <>{data.artworkLocation.map(element => {
                return (
                  <>
                  <li>
                    <b>storageMode : </b> {element.storageMode}                    
                  </li>
                  {element.storage!=[] && <>
                    

                    {element.storage.map(obj => {
                return (
                  <ul>
                    <li><b>location : </b>{obj.location}</li>
                    <li><b>locationRef : </b> {obj.locationRef}</li>
                  </ul>
                );
              })}



                    </>}
                  </>
                );
              })}</>}
            </ul>
          </Typography>
          <Typography gutterBottom>
            <b>Lieux des exposition : </b>
            <ul>
             {!data.expositionLocation==[] && <li>Aucune informaion</li>}
              {data.expositionLocation && <>{data.expositionLocation.map(element => {
                return (
                  <>
                  <li>
                    <b>exposition : </b> {element.exposition}                    
                  </li>
                  <li>
                    <b>date début exposition : </b> {element.expositionStartDate}                    
                  </li>
                  <li>
                    <b>date fin exposition : </b> {element.expositionEndDate}                    
                  </li>
                  </>
                );
              })}</>}
            </ul>
          </Typography>
          <Typography gutterBottom>
            <b>Restorations : </b>
            <ul>
             {!data.restoration==[] && <li>Aucune informaion</li>}
              {data.restoration && <>{data.restoration.map(element => {
                return (
                  <>
                  <li>
                    <b>restorationDate : </b> {element.restorationDate}                    
                  </li>
                  <li>
                    <b>restorationLocation : </b> {element.restorationLocation}                    
                  </li>
                  <li>
                    <b>report : </b> {element.report}                    
                  </li>
                  <li>
                    <b>type : </b> {element.type}                    
                  </li>
                  <li>
                    <b>description : </b> {element.description}                    
                  </li>

                  {element.personnel!=[] && <>
                  
                    {element.personnel.map(obj => {
                return (
                  <ul>
                    <li><b>fullName : </b>{obj.fullName}</li>
                    <li><b>phoneNumber : </b> {obj.phoneNumber}</li>
                    <li><b>email : </b> {obj.email}</li>
                  </ul>
                );
              })}
                  
                  </>}



                  </>
                );
              })}</>}
            </ul>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
      </>}
    </div>
  );
}
