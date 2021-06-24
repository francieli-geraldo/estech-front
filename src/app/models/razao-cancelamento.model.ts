import { BaseModel } from "../_metronic/shared/crud-table";

export interface RazaoCancelamento extends BaseModel {
  id: number;
  reason: string;
  description: string;
}
