import { BaseModel } from "../_metronic/shared/crud-table";

export interface Lancamento extends BaseModel {
  id: number;
  data: string;
  cm: boolean; 
  lm: boolean;
  al: boolean;
  lt: boolean;
  jt: boolean;
  exercicio: boolean; 
  balanca: boolean;
  peso_anterior: number;
  peso_atual: number;
  evolucao: number;
  evolucao_acumulada: number;
}
