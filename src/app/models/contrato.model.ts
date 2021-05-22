import { BaseModel } from "../_metronic/shared/crud-table";

export interface Contrato extends BaseModel {
  id: number;
  programa: number;
  grupo: number;
  dt_inicio: string;
  dt_conclusao: string;
  status: number;
  peso_inicial: number;
  meta: number;
  objetivo: number;
  dt_contratacao_plus: string;
  dt_cancelamento_plus: string;
  dt_cancelamento: string;
  motivo: string;
  observacao: string;
}
