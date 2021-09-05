import { instance } from 'config/api';
import { CareerModel } from '../models/CareerModel';

export const listCareer = (document?: string): Promise<CareerModel[]> =>
  instance.get<CareerModel[]>(`/carreras/${document}`).then((res) => res.data);

export const deleteCareer = (id?: number): Promise<boolean> => {
  return instance
    .delete(`/carreras/${id}`)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};

export const createCareer = (career?: CareerModel): Promise<boolean> => {
  return instance
    .post(`/carreras`, career)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};
