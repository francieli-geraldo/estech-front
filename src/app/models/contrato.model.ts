import { Paciente } from 'src/app/models/paciente.model';
import { BaseModel } from "../_metronic/shared/crud-table";
import { Grupo } from "./grupo.model";
import { Programa } from "./programa.model";

export interface Contrato extends BaseModel {
  id: number;
  
  patientId: number;
  patient: Paciente;
  
  program: Programa;
  group: Grupo;
  programId: number;  
  groupId: number;
  status: string;
  
  startingWeight: number;
  goal: number;
  objetivo: number;
  
  hiringDate: string;
  startDate: string;
  notes: string;

  dateConclusion: string;
  cancellationDate: string;
  reasonCancellation: string;
}


export interface ReactivateContrato extends BaseModel {
  id: number;  
  patientId: number;
  programId: number;  
  groupId: number;
  status: string;  
  startingWeight: number;
  goal: number;
  objetivo: number;  
  hiringDate: string;
  startDate: string;
  notes: string;
}