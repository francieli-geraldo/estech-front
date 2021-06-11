import { BaseModel } from "../_metronic/shared/crud-table";

export interface Paciente extends BaseModel {
  id: number;
  name: string;
  birthDate: string;
  sex: string;
  email: string;
  phone: string;
}
