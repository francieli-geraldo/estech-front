import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GruposComponent } from './grupos.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgramasRoutingModule } from './grupos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGruposModalComponent } from './components/form-grupos-modal/form-grupos-modal.component';
import { DeleteGruposModalComponent } from './components/delete-grupos-modal/delete-grupos-modal.component';



@NgModule({
  declarations: [
    GruposComponent,
    FormGruposModalComponent,
    DeleteGruposModalComponent,
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
    FormGruposModalComponent,
    DeleteGruposModalComponent
  ]
})
export class GruposModule { }
