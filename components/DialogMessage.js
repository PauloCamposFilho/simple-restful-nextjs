import React from "react";
import { IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useDialog } from "../contexts/DialogContext";

const DialogMessage = () => {
  const { label, message, hideDialog } = useDialog();
  if (!message || !label) return null;

  return (
    <Dialog open={true} onClose={hideDialog} fullWidth={true} maxWidth="sm">
      <DialogTitle>{label}</DialogTitle>      
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={hideDialog}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogMessage;