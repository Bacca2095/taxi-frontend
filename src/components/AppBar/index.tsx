import React, { useContext } from 'react';
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { SessionContext } from 'context/SessionContext';
import { useStyles } from './styles';

export const AppBarNav: React.FC = () => {
  const classes = useStyles();
  const {
    mutations: { clearSession },
  } = useContext(SessionContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <DriveEtaIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Taxi App
        </Typography>
        <Button
          color="inherit"
          onClick={() => {
            clearSession();
          }}
        >
          Salir
        </Button>
      </Toolbar>
    </AppBar>
  );
};
