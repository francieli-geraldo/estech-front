import { CoreModule } from './../../_metronic/core/core.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {CRUDTableModule} from '../../_metronic/shared/crud-table';
import { ContratosComponent } from './contratos.component';
import { FormContratoModalComponent } from './components/form-contrato-modal/form-contrato-modal.component';
import { DeleteContratoModalComponent } from './components/delete-contrato-modal/delete-contrato-modal.component';
import { CancelContratoModalComponent } from './components/cancel-contrato-modal/cancel-contrato-modal.component';
import { ContratosRoutingModule } from './contratos-routing.module';
import { ListContratosComponent } from './components/list-contratos/list-contratos.component';
import { ReactivateContratoModalComponent } from './components/reactivate-contrato-modal/reactivate-contrato-modal.component';
import { ConcluedContratoModalComponent } from './components/conclued-contrato-modal/conclued-contrato-modal.component';
import { MonitorFinalProgramaComponent } from './components/monitor-final-programa/monitor-final-programa.component';
import { GraficoEvolucaoComponent } from './components/monitor-final-programa/grafico-evolucao/grafico-evolucao.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({  
  exports:[
    ContratosComponent,
    FormContratoModalComponent,
    DeleteContratoModalComponent,
    CancelContratoModalComponent,
    ConcluedContratoModalComponent,
    ReactivateContratoModalComponent,
    ListContratosComponent,
    MonitorFinalProgramaComponent,
    GraficoEvolucaoComponent,
  ],
  declarations: [
    ContratosComponent,
    FormContratoModalComponent,
    DeleteContratoModalComponent,
    CancelContratoModalComponent,
    ConcluedContratoModalComponent,
    ReactivateContratoModalComponent,
    ListContratosComponent,
    MonitorFinalProgramaComponent,
    GraficoEvolucaoComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ContratosRoutingModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgbTypeaheadModule,
    NgApexchartsModule,
  ],
  entryComponents: [
    FormContratoModalComponent,
    DeleteContratoModalComponent,
    CancelContratoModalComponent,
    ConcluedContratoModalComponent,
    ReactivateContratoModalComponent,
    ListContratosComponent,
    MonitorFinalProgramaComponent,
    GraficoEvolucaoComponent,
  ]
})
export class ContratosModule {}
