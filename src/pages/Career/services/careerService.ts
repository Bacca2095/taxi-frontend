import axios from 'axios';
import { CareerModel } from '../models/CareerModel';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const listCareer = (document?: string): Promise<CareerModel[]> =>
  instance.get<CareerModel[]>(`/carreras/${document}`).then((res) => res.data);
