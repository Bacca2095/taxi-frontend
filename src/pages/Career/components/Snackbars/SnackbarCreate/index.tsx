import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export interface SnackbarProps {
  open: boolean;
  onClose: () => void;
  state: boolean;
}
export const SnackbarCreate: React.FC<SnackbarProps> = ({
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
          ? 'La carrera se creo con éxito'
          : 'No se puede crear la carrera'}
      </MuiAlert>
    </Snackbar>
  );
};
