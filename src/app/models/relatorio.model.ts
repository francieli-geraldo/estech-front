import { BaseModel } from "../_metronic/shared/crud-table";

export interface Relatorio extends BaseModel {
  report: string;
  status: string;
  groupId: string;
  initialDate: string;
  finalDate: string;
}
