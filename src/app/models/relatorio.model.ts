import { BaseModel } from "../_metronic/shared/crud-table";

export interface Relatorio extends BaseModel {
  report: string;
  status: string;
  groupId: string;
  initialDate: string;
  finalDate: string;
  patientId: string;
}


export interface PeriodicReport extends BaseModel {
  groupName: any;
  patientName: any;
  programName: any;
  breakfastTotal: any;
  morningSnackTotal: any;
  lunchTotal: any;
  afternoonSnackTotal: any;
  dinnerTotal: any;
  hiitTotal: any;
  postingPercentage: any;
  balanceTotal: any;
  balancePercentage: any;
  evolutionPeriod: any;
  goal: any;
  notesTotal: any;
}

export interface FullReport extends BaseModel {
  groupName: any;
  patientName: any;
  programName: any;
  breakfastTotal: any;
  morningSnackTotal: any;
  lunchTotal: any;
  afternoonSnackTotal: any;
  dinnerTotal: any;
  hiitTotal: any;
  postingPercentage: any;
  balanceTotal: any;
  balancePercentage: any;
  evolutionPeriod: any;
  goal: any;
  notesTotal: any;
}

export interface CompletedReport extends BaseModel {
  groupName: any;
  patientName: any;
  programName: any;
  breakfastTotal: any;
  morningSnackTotal: any;
  lunchTotal: any;
  afternoonSnackTotal: any;
  dinnerTotal: any;
  hiitTotal: any;
  postingPercentage: any;
  balanceTotal: any;
  balancePercentage: any;
  evolutionPeriod: any;
  goal: any;
  notesTotal: any;
}
