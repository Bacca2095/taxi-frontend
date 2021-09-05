import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from '@material-ui/core';

export interface DialogDeleteProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const DialogDelete: React.FC<DialogDeleteProps> = ({
  open,
  onClose,
  onDelete,
}) => {
  return (
    <>
      <Dialog open={open} maxWidth="xs" fullWidth>
        <DialogTitle color="primary">Cancelar Carrera</DialogTitle>
        <DialogContent>
          <DialogContentText align="center">
            ¿Desea cancelar la carrera?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button
            onClick={onDelete}
            color="secondary"
            data-testid="dialog-delete-button"
            variant="contained"
          >
            Borrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
