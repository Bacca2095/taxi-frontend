import { CareerContext } from 'pages/Career/context/CareerContext';
import React, { useContext, useEffect } from 'react';
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
  GridValueGetterParams,
} from '@material-ui/data-grid';
import { Grid } from '@material-ui/core';

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
  } = useContext(CareerContext);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} style={{ height: 400, width: '100%' }}>
        <DataGrid rows={allCareers} columns={columns} pageSize={5} />
      </Grid>
    </Grid>
  );
};
