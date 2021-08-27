import React, { useState } from 'react';
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import Logo from 'assets/image/logo.svg';
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
      <Grid container className={classes.container}>
        <Grid justify="center" container item xs={10} md={6}>
          <Grid item>
            <div className={classes.containerImg}>
              <img className={classes.img} src={Logo} alt="Logo" />
            </div>
            <Typography
              className={classes.title}
              variant="body2"
              align="center"
              color="textSecondary"
            >
              Welcome to adfoodio
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary">
              To see the food menu first let us know your name
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              className={classes.input}
              fullWidth
              error={showError}
              value={text}
              helperText={showError && 'Incorrect entry.'}
              onChange={(e) => setText(e.target.value)}
              id="outlined-basic"
              label="Full name"
              variant="outlined"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => handleInput()}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
