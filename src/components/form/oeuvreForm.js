import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FileUpload from 'react-mui-fileuploader';

export default function FormDialog() {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [category, setCategory] = useState("Peinture");
  const [dimentions, setDimentions] = useState();
  const [dimension3D, setDimension3D] = useState();
  const [content, setContent] = useState();
  const [description, setDescription] = useState();
  const [artistId, setArtistId] = useState();

  const [open, setOpen] = React.useState(false);

  const handleFilesChange = async (files) => {
    
    setImage(files);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    const objToSave={
      title:title,
      image:image,
      category:category,
      dimentions:dimentions,
      dimension3D:dimension3D,
      content:content,
      description:description,
      artistId:artistId

    }
    console.log(objToSave);
  };


  const handleClose = () => {
    setOpen(false);
  };



  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{marginLeft:20}}>
        Ajouter Oeuvre
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter Oeuvre</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setTitle(e.target.value);

            }
            }
          />

<FileUpload
            multiFile={false}
            disabled={false}
            title={"Choice the file"}
            header="Drag to drop"
            leftLabel="or"
            rightLabel="to select files"
            buttonLabel="click here"
            buttonRemoveLabel="Remove all"
           
            maxUploadFiles={0}
            
            errorSizeMessage={'fill it or move it to use the default error message'}
            
            // onChange function 
            onFilesChange={handleFilesChange}

            bannerProps={{ elevation: 0, variant: "outlined" }}
            containerProps={{ elevation: 0, variant: "outlined" }}
          />

          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={"Peinture"}>Peinture</MenuItem>
          <MenuItem value={"Sculpture"}>Sculpture</MenuItem>
          <MenuItem value={"Arts"}>Arts</MenuItem>
          <MenuItem value={"Photographie"}>Photographie</MenuItem>
          <MenuItem value={"Video"}>Video</MenuItem>
          <MenuItem value={"Textile"}>Textile</MenuItem>
          <MenuItem value={"Installation"}>Installation</MenuItem>
        </Select>
      </FormControl>
    </Box>

          <TextField
            autoFocus
            margin="dense"
            id="diemnsions"
            label="diemnsions"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setDimentions(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="diemnsions3d"
            label="diemnsions 3D"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setDimension3D(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="content"
            label="content"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setContent(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="Description"
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
            id="Artist ID"
            label="Artist ID"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setArtistId(e.target.value);

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