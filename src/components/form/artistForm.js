import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ArtistForm() {

  const [fullName, setFullName] = useState("");
  const [biography, setBiography] = useState("");
  const [birthday, setBirthday] = useState("");
  const [deathDate, setDeathDate] = useState("");
  const [deathPlace, setDeathPlace] = useState("");


  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    const objToSave={
        fullName:fullName,
        biography:biography,
        birthday:birthday,
        deathDate:deathDate,
        deathPlace:deathPlace

    }
    console.log(objToSave);
  };


  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{marginLeft:20}}>
        Ajouter Artiste
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter Artiste</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez saisir tous les données du formulaires.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nom complet"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setFullName(e.target.value);

            }
            }
          />


          <TextField
            autoFocus
            margin="dense"
            id="Biography"
            label="Biography"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setBiography(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="Birthday"
            label="Birthday"
            type="text"
            fullWidth
            variant="outlined"
            placeholder='yyyy-mm-dd'
            onChange={(e) => {

              setBirthday(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="DeathPlace"
            label="Death Place"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setDeathPlace(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="DeathDate"
            label="Death Date"
            type="text"
            fullWidth
            variant="outlined"
            placeholder='yyyy-mm-dd'
            onChange={(e) => {

              setDeathDate(e.target.value);

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