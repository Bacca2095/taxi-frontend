import React from 'react';
import { Button } from '@material-ui/core';

interface ButtonLogoutProps {
  onClick: () => void;
}

export const ButtonLogout: React.FC<ButtonLogoutProps> = ({ onClick }) => {
  return (
    <Button data-testid="logout" color="inherit" onClick={onClick}>
      Salir
    </Button>
  );
};
