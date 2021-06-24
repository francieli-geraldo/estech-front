import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormRazaoCancelamentoModalComponent } from './components/form-razao-cancelamento-modal/form-razao-cancelamento-modal.component';
import { DeleteRazaoCancelamentoModalComponent } from './components/delete-razao-cancelamento-modal/delete-razao-cancelamento-modal.component';
import { RazoesCancelamentoComponent } from './razoes-cancelamento.component';
import { RazoesCancelamentoRoutingModule } from './razoes-cancelamento-routing.module';


@NgModule({
  declarations: [
    RazoesCancelamentoComponent,
    FormRazaoCancelamentoModalComponent,
    DeleteRazaoCancelamentoModalComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RazoesCancelamentoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule
  ],
  entryComponents: [
    FormRazaoCancelamentoModalComponent,
    DeleteRazaoCancelamentoModalComponent
  ]
})
export class RazoesCancelamentoModule { }
