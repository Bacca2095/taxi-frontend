import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
} from '@material-ui/core';

export interface DialogDeleteProps {
  open: boolean;
  onClose: () => void;
}

export const DialogDelete: React.FC<DialogDeleteProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <DialogTitle color="primary">Cancelar Carrera</DialogTitle>
      <DialogContent>
        <DialogContentText align="center">
          ¿Desea cancelar la carrera?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button color="secondary" variant="contained">
          Borrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
