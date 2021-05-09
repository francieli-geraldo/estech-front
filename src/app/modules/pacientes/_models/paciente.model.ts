import { BaseModel } from "../../../_metronic/shared/crud-table";

export interface Paciente extends BaseModel {
  id: number;
  nome: string;
  dt_nascimento: string;
  sexo: string;
  email: string;
  celular: string;
}
