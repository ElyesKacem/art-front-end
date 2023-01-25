import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function RestorationForm() {

  const [restorationDate, setRestorationDate] = useState("");
  const [restorationLocation, setRestorationLocation] = useState("");
  const [report, setReport] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [personnelId, setPersonnelId] = useState();
  const [artworkId, setArtworkId] = useState();




  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    const objToSave={
      restorationDate:Date(restorationDate),
      restorationLocation:restorationLocation,
      report:report,
      type:type,
      description:description,
      personnelId:Number(personnelId),
      artworkId:Number(artworkId)

    }
    console.log(objToSave);
    axios.post("http://localhost:3000/api/restorations", objToSave, {
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
        Ajouter restoration
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter restoration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez saisir tous les données du formulaires.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="restorationDate"
            label="Date de restoration"
            type="text"
            fullWidth
            variant="outlined"
            placeholder='yyyy-mm-ddy'
            onChange={(e) => {

              setRestorationDate(e.target.value);

            }
            }
          />


          <TextField
            autoFocus
            margin="dense"
            id="restorationLocation"
            label="Location de restoration"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setRestorationLocation(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="report"
            label="Rapport"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setReport(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="type"
            label="Type"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setType(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setDescription(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="personnelId"
            label="PersonnelId"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setPersonnelId(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="artworkId"
            label="Id Oeuvre"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setArtworkId(e.target.value);

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