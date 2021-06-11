import { BaseModel } from "../_metronic/shared/crud-table";

export interface Grupo extends BaseModel {
  id: number;
  name: string;
  description: string;
}
