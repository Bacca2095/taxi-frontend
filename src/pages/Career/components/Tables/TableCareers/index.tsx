import { CareerContext } from 'pages/Career/context/CareerContext';
import React, { useContext } from 'react';
import {
  DataGrid,
  GridColDef,
  GridSelectionModel,
  GridValueFormatterParams,
} from '@material-ui/data-grid';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', hide: true },
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 120,
    sortable: false,
  },
  {
    field: 'documento',
    headerName: 'Documento',
    width: 140,
    sortable: false,
  },
  {
    field: 'telefono',
    headerName: 'Teléfono',
    width: 130,
    sortable: false,
  },
  {
    field: 'horaRecogida',
    headerName: 'Hora',
    width: 100,
    sortable: false,
  },
  {
    field: 'fechaRecogida',
    headerName: 'Fecha de recogida',
    width: 200,
    sortable: false,
    valueFormatter: (params: GridValueFormatterParams) =>
      params.getValue(params.id, params.field)?.toString().split('T')[0],
  },
  {
    field: 'direccion',
    headerName: 'Dirección',
    width: 200,
    sortable: false,
  },
  {
    field: 'costo',
    width: 120,
    headerName: 'Costo',
  },
];
export const TableCareer: React.FC = () => {
  const {
    data: { allCareers },
    mutations: { setCurrentCareerId },
  } = useContext(CareerContext);
  const classes = useStyles();

  const size = 10;

  const currentCareer = (id: GridSelectionModel) => {
    setCurrentCareerId((id[0] as number) || 0);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.dataGrid}>
        <DataGrid
          rows={allCareers}
          columns={columns}
          pageSize={size}
          rowsPerPageOptions={[size]}
          onSelectionModelChange={currentCareer}
        />
      </Grid>
    </Grid>
  );
};
