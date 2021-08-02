import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {CRUDTableModule} from '../../_metronic/shared/crud-table';
import { ContratosModule } from '../contratos/contratos.module';
import { ExportAsModule } from 'ngx-export-as';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosComponent } from './lancamentos.component';
import { ListLancamentosComponent } from './list-lancamentos/list-lancamentos.component';
import { NgxMaskModule } from 'ngx-mask';
import { InputsModule } from 'src/app/_metronic/shared/inputs';


@NgModule({
  exports:[
    LancamentosComponent,
    ListLancamentosComponent
  ],
  declarations: [
    LancamentosComponent, 
    ListLancamentosComponent
  ],
  imports: [
    NgxMaskModule.forChild(),
    CommonModule,
    InputsModule,
    HttpClientModule,
    LancamentosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbTypeaheadModule,
    NgbDatepickerModule,
    ExportAsModule,
    NgbDropdownModule,
    NgApexchartsModule
  ],
  entryComponents: [
  ]
})
export class LancamentosModule {}
