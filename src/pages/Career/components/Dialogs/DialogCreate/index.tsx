import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

export interface ButtonCreateProps {
  onClick: () => void;
}

export const ButtonCreate: React.FC = () => {
  return (
    <Tooltip title="Crear Carrera" arrow>
      <IconButton color="primary">
        <AddCircleRoundedIcon fontSize="large" />
      </IconButton>
    </Tooltip>
  );
};
