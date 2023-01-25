import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function PersonnelForm() {

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");


  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    const objToSave={
        fullName:fullName,
        phoneNumber:Number(phoneNumber),
        email:email
    }
    console.log(objToSave);
    axios.post("http://localhost:3000/api/personnels", objToSave, {
      headers: {
        "Content-Type": 'application/json'
      }
    })
  };


  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{marginLeft:20}}>
        Ajouter Personnel
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter Personnel</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez saisir tous les données du formulaires.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="fullName"
            label="Full name"
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
            id="phoneNumber"
            label="Phone number"
            type="number"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setPhoneNumber(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="Email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setEmail(e.target.value);

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