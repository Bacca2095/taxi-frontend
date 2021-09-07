import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export interface SnackbarProps {
  open: boolean;
  onClose: () => void;
  state: boolean;
}
export const SnackbarDelete: React.FC<SnackbarProps> = ({
  open,
  onClose,
  state,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <MuiAlert
        onClose={onClose}
        elevation={6}
        variant="filled"
        severity={state ? 'success' : 'error'}
      >
        {state
          ? 'La carrera se elimino con éxito'
          : 'No se puede cancelar la carrera porque esta en proceso o ya se realizo'}
      </MuiAlert>
    </Snackbar>
  );
};
