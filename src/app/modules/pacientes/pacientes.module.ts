import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {CRUDTableModule} from '../../_metronic/shared/crud-table';
import {WidgetsModule} from '../../_metronic/partials/content/widgets/widgets.module';
import {DropdownMenusModule} from '../../_metronic/partials/content/dropdown-menus/dropdown-menus.module';
import { PacientesComponent } from './pacientes.component';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { FormPacienteModalComponent } from './components/form-paciente-modal/form-paciente-modal.component';
import { DeletePacienteModalComponent } from './components/delete-paciente-modal/delete-paciente-modal.component';
import { EditPacienteComponent } from './paciente-edit/edit-paciente.component';
import { ContratosComponent } from './paciente-edit/contratos/contratos.component';
import { FormContratoModalComponent } from './paciente-edit/contratos/components/form-contrato-modal/form-contrato-modal.component';
import { DeleteContratoModalComponent } from './paciente-edit/contratos/components/delete-contrato-modal/delete-contrato-modal.component';


@NgModule({
  declarations: [
    PacientesComponent,
    FormPacienteModalComponent,
    DeletePacienteModalComponent,
    EditPacienteComponent,
    ContratosComponent,
    FormContratoModalComponent,
    DeleteContratoModalComponent,    
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
    NgbDatepickerModule
  ],
  entryComponents: [
    FormPacienteModalComponent,
    DeletePacienteModalComponent,
    FormContratoModalComponent,
    DeleteContratoModalComponent,
  ]
})
export class PacientesModule {}
