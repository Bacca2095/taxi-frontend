import React, { useState } from 'react';
import { TableCareer } from 'pages/Career/components/Tables/TableCareers';
import { Grid, Typography } from '@material-ui/core';
import { ButtonCreate } from 'pages/Career/components/Buttons/ButtonCreate';
import { ButtonDelete } from 'pages/Career/components/Buttons/ButtonDelete';
import { DialogDelete } from 'pages/Career/components/Dialogs/DialogDelete';

export const CareerContainer: React.FC = () => {
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogCreate, setOpenDialogCreate] = useState(false);

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
                  <ButtonCreate />
                </Grid>
                <Grid>
                  <ButtonDelete
                    onClick={() => {
                      setOpenDialogDelete(true);
                    }}
                  />
                </Grid>
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
      />
    </>
  );
};
