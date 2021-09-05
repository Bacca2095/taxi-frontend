import React, { useContext, useState } from 'react';
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
  Typography,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { SessionContext } from 'context/SessionContext';
import { CareerModel } from 'pages/Career/models/CareerModel';
import { useForm, SubmitHandler } from 'react-hook-form';
import { hour } from 'utils/date';

export interface DialogCreateProps {
  open: boolean;
  onClose: () => void;
  onCreate: (career: CareerModel) => void;
}

type Inputs = {
  nombre: string;
  direccion: string;
  telefono: number;
};

export const DialogCreate: React.FC<DialogCreateProps> = ({
  open,
  onClose,
  onCreate,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });
  const {
    data: { sessionId },
  } = useContext(SessionContext);

  const [documento] = useState(sessionId?.split(':::')[1]);
  const [fechaRecogida, setFechaRecogida] = useState<Date>(new Date());

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { nombre, telefono, direccion } = data;
    const hora = hour(fechaRecogida);
    const career: CareerModel = {
      nombre,
      documento: documento || '',
      telefono: +telefono,
      fechaRecogida: fechaRecogida.toISOString(),
      horaRecogida: hora,
      direccion,
    };
    reset();
    onCreate(career);
  };

  const handleDateChange = (date: Date | null) => {
    setFechaRecogida(date || new Date());
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dialog open={open} maxWidth="md" fullWidth disablePortal>
          <DialogTitle color="primary" disableTypography>
            <Typography variant="h4">Solicitar Carrera</Typography>
          </DialogTitle>
          <DialogContent dividers>
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
                <TextField
                  label="Nombre"
                  {...register('nombre', { required: true })}
                  variant="outlined"
                  error={errors.nombre !== undefined}
                  helperText={errors.nombre && 'El nombre es obligatorio.'}
                  fullWidth
                  inputProps={{ 'data-testid': 'input-name' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Teléfono"
                  {...register('telefono', { required: true })}
                  error={errors.telefono !== undefined}
                  helperText={errors.telefono && 'El telefono es obligatorio.'}
                  variant="outlined"
                  type="number"
                  fullWidth
                  inputProps={{ 'data-testid': 'input-phone' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Dirección"
                  {...register('direccion', { required: true })}
                  error={errors.direccion !== undefined}
                  helperText={
                    errors.direccion && 'La direccion es obligatoria.'
                  }
                  variant="outlined"
                  fullWidth
                  inputProps={{ 'data-testid': 'input-address' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <KeyboardDatePicker
                  margin="normal"
                  label="Fecha"
                  format="yyyy/MM/dd"
                  value={fechaRecogida}
                  onChange={handleDateChange}
                  inputVariant="outlined"
                  fullWidth
                  inputProps={{ 'data-testid': 'input-date' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <KeyboardTimePicker
                  margin="normal"
                  label="Hora"
                  value={fechaRecogida}
                  onChange={handleDateChange}
                  inputVariant="outlined"
                  fullWidth
                  inputProps={{ 'data-testid': 'input-time' }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancelar</Button>
            <Button
              color="primary"
              data-testid="dialog-create-button"
              variant="contained"
              type="submit"
              disabled={!isValid}
            >
              Solicitar
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </MuiPickersUtilsProvider>
  );
};
