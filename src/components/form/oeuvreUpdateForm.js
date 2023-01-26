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
import axios from 'axios';

export default function ArtWorkUpdateForm({id,data}) {
  const [title, setTitle] = useState(data.title);
  // const [image, setImage] = useState();
  const [category, setCategory] = useState(data.category);
  const [dimensions, setDimensions] = useState(data.dimensions);
  const [dimension3d, setDimension3d] = useState(data.dimensions3d);
  const [content, setContent] = useState(data.content);
  const [description, setDescription] = useState(data.description);
  const [creationDate, setCreationDate] = useState(data.creation_date.substr(0, 10));
  const [artistId, setArtistId] = useState(data.artistId);

  const [open, setOpen] = React.useState(false);

  const handleFilesChange = async (files) => {
    
    // setImage(files);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = async() => {
    
    const objToSave={
      title:title,
      category:category,
      dimensions:dimensions,
      dimensions3d:dimension3d,
      content:content,
      description:description,
      creation_date:new Date(creationDate),
      artistId:Number(artistId)
    }
   console.log("yoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",objToSave);
    



    const response = await axios.patch("http://localhost:3000/api/artworks/"+id,objToSave)
    .catch((error) => console.log('Error: ', error));
if (response && response.data) {
    console.log(response);
    console.log(response.data);
}



    window.location.reload(false);
  };


  const handleClose = () => {
    setOpen(false);
  };



  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <Button size="small" variant="outlined" onClick={handleClickOpen} style={{marginLeft:20}} color='secondary' >
        Modifier
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Mise à jour</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez saisir tous les données du formulaires.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            value={title}
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
            value={dimensions}
            onChange={(e) => {

              setDimensions(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="diemnsions3d"
            value={dimension3d}
            label="diemnsions 3D"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setDimension3d(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="content"
            value={content}
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
            value={description}
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
            value={artistId}
            label="Artist ID"
            type="number"
            fullWidth
            variant="outlined"
            onChange={(e) => {

              setArtistId(e.target.value);

            }
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="creationDate"
            value={creationDate}
            label="Date de création"
            type="text"
            fullWidth
            variant="outlined"
            placeholder='yyyy-mm-dd'
            onChange={(e) => {

              setCreationDate(e.target.value);

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