/* eslint-disable prettier/prettier */
export interface CareerModel {
  id?: number;
  nombre: string;
  documento: string;
  telefono: number;
  fechaRecogida: string | Date;
  horaRecogida: string;
  direccion: string;
  costo?: number;
}
