import React, { useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useError } from "../contexts/ErrorContext";

const ErrorDialog = () => {
  const { error, hideError } = useError();
  if (!error) return null;

  return (
    <Dialog open={true} onClose={hideError}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <DialogContentText>{error}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={hideError}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;