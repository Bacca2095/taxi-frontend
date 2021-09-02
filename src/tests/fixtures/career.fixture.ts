import { CareerModel } from 'pages/Career/models/CareerModel';
import cloneDeep from 'lodash/cloneDeep';

export const getSingle = (career?: Partial<CareerModel>): CareerModel =>
  cloneDeep({
    nombre: 'test',
    documento: '12345',
    telefono: 0,
    direccion: 'calle test',
    fechaRecogida: '2021-08-13T08:00:00.626Z',
    horaRecogida: '8:00',
  });

export const getList = (): CareerModel[] => {
  return cloneDeep([getSingle()]);
};
