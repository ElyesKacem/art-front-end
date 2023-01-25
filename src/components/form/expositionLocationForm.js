import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ExpositionLocationForm() {

  const [exposition, setExposition] = useState("");
  const [expositionStartDate, setExpositionStartDate] = useState("");
  const [expositionEndDate, setexpositionEndDate] = useState("");
  const [artWorkId, setArtWorkId] = useState();


  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    const objToSave={
        exposition:exposition,
        expositionStartDate:expositionStartDate,
        expositionEndDate:expositionEndDate,
        artWorkId:Number(artWorkId)
    }
    console.log(objToSave);
  };


  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{marginLeft:20}}>
        Ajouter lo-expo
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter location expo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez saisir tous les données du formulaires.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="exposition"
            label="Exposition"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setExposition(e.target.value);

            }
            }
          />


          <TextField
            autoFocus
            margin="dense"
            id="setExpositionStartDate"
            label="Date du début d'exposition"
            type="text"
            fullWidth
            variant="outlined"
            placeholder='yyyy-mm-dd'
            onChange={(e) => {

              setExpositionStartDate(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="expositionEndDate"
            label="Date du fin d'exposition"
            type="text"
            fullWidth
            variant="outlined"
            placeholder='yyyy-mm-dd'
            onChange={(e) => {

              setexpositionEndDate(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="artWorkId"
            label="ID Oeuvre"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setArtWorkId(e.target.value);

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