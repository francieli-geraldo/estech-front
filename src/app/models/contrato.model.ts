import { BaseModel } from "../_metronic/shared/crud-table";
import { Grupo } from "./grupo.model";
import { Programa } from "./programa.model";

export interface Contrato extends BaseModel {
  id: number;
  
  patientId: number;
  
  program: Programa;
  group: Grupo;
  programId: number;  
  groupId: number;
  status: string;
  
  startingWeight: string;
  goal: string;
  objetivo: string;
  
  hiringDate: string;
  startDate: string;
  notes: string;


  dateConclusion: string;
  cancellationDate: string;
  reasonCancellation: string;
}