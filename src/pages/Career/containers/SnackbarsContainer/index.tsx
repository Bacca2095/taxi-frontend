import React, { useContext } from 'react';
import { CareerContext } from 'pages/Career/context/CareerContext';
import { SnackbarDelete } from 'pages/Career/components/Snackbars/SnackbarDelete';
import { SnackbarCreate } from 'pages/Career/components/Snackbars/SnackbarCreate';

export interface SnackbarContainerProps {
  showDelete: boolean;
  showCreate: boolean;
  closeCreate: () => void;
  closeDelete: () => void;
}

export const SnackbarContainer: React.FC<SnackbarContainerProps> = ({
  showCreate,
  showDelete,
  closeCreate,
  closeDelete,
}) => {
  const {
    data: { errorOnDelete, errorOnCreate },
  } = useContext(CareerContext);

  return (
    <>
      <SnackbarDelete
        open={showDelete}
        onClose={closeDelete}
        state={!errorOnDelete}
      />
      <SnackbarCreate
        open={showCreate}
        onClose={closeCreate}
        state={!errorOnCreate}
      />
    </>
  );
};
