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
  const [data, setData] = useState({})
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

export default function ArtInfos() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        // fullWidth={fullWidth}
        // maxWidth={sm}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <b>Image :</b>
          </Typography>
          <Typography gutterBottom>
            <b>Catégorie :</b>
          </Typography>
          <Typography gutterBottom>
            <b>Dimension : </b>
          </Typography>
          <Typography gutterBottom>
            <b>Dimension 3D :</b>
          </Typography>
          <Typography gutterBottom>
            <b>Contenu :</b>
          </Typography>
          <Typography gutterBottom>
            <b>Description :</b>
          </Typography>
          <Typography gutterBottom>
            <b>Date de création : </b>
          </Typography>
          <Typography gutterBottom>
            <b>Artiste : </b>
          </Typography>
          voir plus sur l'artiste
          <br />
          <Typography gutterBottom>
            <b>Lieu de l'arts : </b>
          </Typography>
          <Typography gutterBottom>
            <b>Location des exposition : </b>
          </Typography>
          <Typography gutterBottom>
            <b>Restorations : </b>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
