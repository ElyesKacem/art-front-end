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

export default function ArtisteInfos(props) {

  React.useEffect(() => {

    axios.get("http://localhost:3000/api/artists/"+props.id).then((response) => {
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
            <b>Nom complet :</b> {data.fullName}
          </Typography>
          <Typography gutterBottom>
            <b>biography : </b> {data.biography}
          </Typography>
          <Typography gutterBottom>
            <b>date de naissance :</b> {data.birthDate}
          </Typography>
          <Typography gutterBottom>
            <b>lieu de naissance :</b> {data.birthPlace}
          </Typography>
          <Typography gutterBottom>
            <b>date de décès :</b> {data.deathDate}
          </Typography>
          <Typography gutterBottom>
            <b>Lieu de décès : </b> {data.deathDate}
          </Typography>
          <Typography gutterBottom>
            <b>Travaux : </b> 


            {data.Artwork.map(obj => {
                return (
                  <>
                    <><b>Nom : </b>{obj.title}</>
                    <br />
                    <><b>art : </b> <img src={"http://localhost:3000"+obj.snapshotURL}  /> </>
                  </>
                );
              })}
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
