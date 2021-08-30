import React from 'react';
import { Container } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { CareerContainer } from './containers/CareerContainer';
import { CareerProvider } from './context/CareerContext';
import { AppBarNav } from '../../components/AppBar';
import { useStyles } from './styles';

export const CareerPage: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  return (
    <>
      <AppBarNav />
      <Container className={classes.containerMarginTop}>
        <CareerProvider>
          <CareerContainer />
        </CareerProvider>
      </Container>
    </>
  );
};
