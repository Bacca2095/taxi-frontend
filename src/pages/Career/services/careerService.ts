import axios from 'axios';
import { CareerModel } from '../models/CareerModel';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

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
