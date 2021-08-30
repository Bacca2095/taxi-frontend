import React, { useState } from 'react';
import 'date-fns';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  TextField,
  Grid,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export interface DialogCreateProps {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
}

export const DialogCreate: React.FC<DialogCreateProps> = ({
  open,
  onClose,
  onCreate,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Dialog open={open} maxWidth="md" fullWidth>
        <DialogTitle color="primary">Solicitar Carrera</DialogTitle>
        <DialogContent>
          <DialogContentText align="center">
            Complete los datos para solicitar la carrera
          </DialogContentText>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignContent="center"
          >
            <Grid item xs={12} md={6}>
              <TextField label="Nombre" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Teléfono" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Dirección" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <KeyboardDatePicker
                margin="normal"
                label="Fecha"
                format="yyyy/MM/dd"
                value={selectedDate}
                onChange={handleDateChange}
                inputVariant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <KeyboardTimePicker
                margin="normal"
                label="Hora"
                value={selectedDate}
                onChange={handleDateChange}
                inputVariant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={onCreate} color="primary" variant="contained">
            Solicitar
          </Button>
        </DialogActions>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
};
