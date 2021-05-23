import { BaseModel } from "../_metronic/shared/crud-table";

export interface Relatorio extends BaseModel {
  relatorio: string;
  status: string;
  grupo: string;
  semana: string;
}
