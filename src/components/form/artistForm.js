import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function ArtistForm() {

  const [fullName, setFullName] = useState("");
  const [biography, setBiography] = useState("");
  const [birthday, setBirthday] = useState("");
  const [birthplace, setBirthplace] = useState("");
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
        birthDate:birthday,
        birthPlace:birthplace,
        deathDate:deathDate,
        deathPlace:deathPlace

    }
    axios.post("http://localhost:3000/api/artists",objToSave,{
      headers:{
        "Content-Type": 'application/json'
      }
    })
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
            label="Birth day"
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
            id="Birthplace"
            label="Birth place"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setBirthplace(e.target.value);

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