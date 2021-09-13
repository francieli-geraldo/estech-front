import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ExportAsModule } from 'ngx-export-as';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';

import {CRUDTableModule } from '../../_metronic/shared/crud-table';

import { PacientesComponent } from './pacientes.component';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { FormPacienteModalComponent } from './components/form-paciente-modal/form-paciente-modal.component';
import { DeletePacienteModalComponent } from './components/delete-paciente-modal/delete-paciente-modal.component';
import { EditPacienteComponent } from './paciente-edit/edit-paciente.component';
import { ContratosModule } from '../contratos/contratos.module';
import { RelatorioPacienteComponent } from './components/relatorio-paciente/relatorio-paciente.component';
import { RelatorioPacienteModalComponent } from './components/relatorio-paciente-modal/relatorio-paciente-modal.component';
import { LancamentosModule } from '../lancamentos/lancamentos.module';


@NgModule({
  declarations: [
    PacientesComponent,    
    FormPacienteModalComponent,
    DeletePacienteModalComponent,
    EditPacienteComponent,
    RelatorioPacienteComponent,
    RelatorioPacienteModalComponent  
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PacientesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule,
    ContratosModule, 
    LancamentosModule,
    ExportAsModule,
    NgbDropdownModule,
    NgApexchartsModule,
  ],
  entryComponents: [
    FormPacienteModalComponent,
    DeletePacienteModalComponent,
    RelatorioPacienteModalComponent
  ]
})
export class PacientesModule {}
