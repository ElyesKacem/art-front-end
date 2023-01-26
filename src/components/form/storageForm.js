import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function StorageForm() {

  const [location, setLocation] = useState("");
  const [locationRef, setLocationRef] = useState("");



  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    const objToSave={
        location:location,
        locationRef:locationRef
    }
    axios.post("http://localhost:3000/api/storages",objToSave,{
      headers:{
        "Content-Type": 'application/json'
      }
    })
    console.log(objToSave);
    window.location.reload(false);
  };


  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{marginLeft:20}}>
        Ajouter Storage
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter Storage</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez saisir tous les données du formulaires.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Location"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setLocation(e.target.value);

            }
            }
          />


          <TextField
            autoFocus
            margin="dense"
            id="locationRef"
            label="locationRef"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setLocationRef(e.target.value);

            }
            }
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}