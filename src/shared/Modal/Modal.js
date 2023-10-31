import React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
//Icons
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(4),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Modal = ({
    title = "",
    body,
    isOpen,
    handleClose,
    viewButtonClose = true,
    maxWidth = "md",
    fullWidth = false,
    is_fullWidth,
    handleDeleteprice = () => null,
}) => {
    const style = {
        backgroundColorButtonClose: "white",
        colorButtonClose: "#000",
    };
    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={isOpen}
            maxWidth={maxWidth}
            fullWidth={fullWidth}
            fullScreen={is_fullWidth}
        >
        <div style={style}>
          {title && <DialogTitle sx={{ m: 0, p: 2 }}>{title}</DialogTitle>}
  
          {handleClose && viewButtonClose ? (
            <>
              <IconButton
                aria-label="close"
                style={{
                  position: "absolute",
                  borderRadius: 0,
                  right: 8,
                  top: 10,
                  color: 'black',
                }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </>
          ) : null}
          <DialogContent dividers>{body}</DialogContent>
        </div>
      </BootstrapDialog>
    );
}

export default Modal;