import { BaseModel } from "../_metronic/shared/crud-table";

export interface Programa extends BaseModel {
  id: number;
  nome: string;
  descricao: string;
}
