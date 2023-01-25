import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ArtWorkLocationForm() {

const [storageMode, setStorageMode] = useState("");
const [artWorkId, setArtWorkId] = useState();
const [storageId, setStorageId] = useState();


  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    const objToSave={
        storageMode:storageMode,
        artWorkId:artWorkId,
        storageId:storageId
    }
    console.log(objToSave);
  };


  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{marginLeft:20}}>
        Ajouter location oeuvre. 
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter la location de l'oeuvre. </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez saisir tous les données du formulaires.
          </DialogContentText>
          

          <TextField
            autoFocus
            margin="dense"
            id="StorageMode"
            label="Storage Mode"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setStorageMode(e.target.value);

            }
            }
          />


          <TextField
            autoFocus
            margin="dense"
            id="Oeuvre"
            label="Oeuvre"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setArtWorkId(e.target.value);

            }
            }
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="storageId"
            label="Storage Id"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setStorageId(e.target.value);

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