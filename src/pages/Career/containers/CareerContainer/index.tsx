import React, { useContext, useEffect, useState } from 'react';
import { TableCareer } from 'pages/Career/components/Tables/TableCareers';
import { Grid, Typography } from '@material-ui/core';
import { ButtonCreate } from 'pages/Career/components/Buttons/ButtonCreate';
import { ButtonDelete } from 'pages/Career/components/Buttons/ButtonDelete';
import { DialogDelete } from 'pages/Career/components/Dialogs/DialogDelete';
import { CareerContext } from 'pages/Career/context/CareerContext';
import { DialogCreate } from 'pages/Career/components/Dialogs/DialogCreate';
import { CareerModel } from 'pages/Career/models/CareerModel';
import { SnackbarContainer } from '../SnackbarsContainer';

export const CareerContainer: React.FC = () => {
  const {
    data: { currentCareerId },
    mutations: { deleteCareer, createCareer },
  } = useContext(CareerContext);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogCreate, setOpenDialogCreate] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showSnackDelete, setShowSnackDelete] = useState(false);
  const [showSnackCreate, setShowSnackCreate] = useState(false);

  const handleDelete = () => {
    deleteCareer();
    setShowSnackDelete(true);
    setOpenDialogDelete(false);
  };

  const handleCreate = (career: CareerModel) => {
    createCareer(career);
    setShowSnackCreate(true);
    setOpenDialogCreate(false);
  };

  useEffect(() => {
    if (currentCareerId && currentCareerId > 0) {
      setShowDeleteButton(true);
    } else {
      setShowDeleteButton(false);
    }
  }, [currentCareerId]);

  return (
    <>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={10}>
              <Typography variant="h4">Carreras</Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Grid container justifyContent="center">
                <Grid>
                  <ButtonCreate
                    onClick={() => {
                      setOpenDialogCreate(true);
                    }}
                  />
                </Grid>
                {showDeleteButton ? (
                  <Grid>
                    <ButtonDelete
                      onClick={() => {
                        setOpenDialogDelete(true);
                      }}
                    />
                  </Grid>
                ) : (
                  ''
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableCareer />
        </Grid>
      </Grid>
      <DialogDelete
        open={openDialogDelete}
        onClose={() => {
          setOpenDialogDelete(false);
        }}
        onDelete={() => {
          handleDelete();
        }}
      />
      <DialogCreate
        open={openDialogCreate}
        onClose={() => {
          setOpenDialogCreate(false);
        }}
        onCreate={handleCreate}
      />
      <SnackbarContainer
        showDelete={showSnackDelete}
        showCreate={showSnackCreate}
        closeCreate={() => {
          setShowSnackCreate(false);
        }}
        closeDelete={() => {
          setShowSnackDelete(false);
        }}
      />
    </>
  );
};
