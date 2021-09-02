import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Grid,
  Button,
  Card,
  Hidden,
} from '@material-ui/core';
import { useStyles } from './styles';

export interface LandingProps {
  onContinue: (name: string) => void;
}
export const Landing: React.FC<LandingProps> = ({ onContinue }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [showError, setShowError] = useState(false);

  const handleInput = () => {
    if (text.length <= 0 || text.includes(':')) {
      setShowError(true);
      return;
    }
    setShowError(false);
    onContinue(text);
  };
  return (
    <>
      <Grid container justifyContent="center" className={classes.container}>
        <Grid
          container
          item
          xs={10}
          md={6}
          className={classes.containerItem}
          justifyContent="center"
          alignContent="center"
        >
          <Grid container item xs={12} sm={8} md={6}>
            <Card className={classes.card} variant="elevation" elevation={6}>
              <Grid container justifyContent="center" alignContent="center">
                <Grid item md={10} xs={12}>
                  <Typography
                    className={classes.title}
                    variant="body2"
                    align="center"
                    color="textSecondary"
                  >
                    Bienvenido a Taxi APP
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    color="textSecondary"
                  >
                    Ingrese su documento para consultar y solicitar nuevas
                    carreras
                  </Typography>
                </Grid>
                <Grid item md={10} xs={12}>
                  <TextField
                    className={classes.input}
                    fullWidth
                    error={showError}
                    value={text}
                    helperText={
                      showError && 'El numero de documento es obligatorio.'
                    }
                    onChange={(e) => setText(e.target.value)}
                    data-testid="document"
                    id="outlined-basic"
                    label="Numero de documento"
                    variant="outlined"
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => handleInput()}
                    data-testid="login"
                  >
                    Continuar
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Hidden only={['xs', 'sm']}>
          <Grid item md={6} className={classes.backgroundImg} />
        </Hidden>
      </Grid>
    </>
  );
};
