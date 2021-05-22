import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramasComponent } from './programas.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgramasRoutingModule } from './programas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ProgramasComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProgramasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule
  ],
  entryComponents: [
  ]
})
export class ProgramasModule { }
