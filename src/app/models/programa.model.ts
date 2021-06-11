import { BaseModel } from "../_metronic/shared/crud-table";

export interface Programa extends BaseModel {
  id: number;
  name: string;
  description: string;
}
