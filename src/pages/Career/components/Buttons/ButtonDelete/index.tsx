import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import DeleteRounded from '@material-ui/icons/DeleteRounded';

export interface ButtonDeleteProps {
  onClick: () => void;
}

export const ButtonDelete: React.FC<ButtonDeleteProps> = ({ onClick }) => {
  return (
    <Tooltip title="Cancelar Carrera" color="secondary" arrow>
      <IconButton color="secondary" onClick={onClick}>
        <DeleteRounded fontSize="large" />
      </IconButton>
    </Tooltip>
  );
};
