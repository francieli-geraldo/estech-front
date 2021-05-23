import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatoriosComponent } from './relatorios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RelatorioSemanalComponent } from './relatorio-semanal/relatorio-semanal.component';
import { RelatorioEvolucaoComponent } from './relatorio-evolucao/relatorio-evolucao.component';
import { RelatorioConcluidoComponent } from './relatorio-concluido/relatorio-concluido.component';

@NgModule({
  exports: [RelatoriosComponent],  
  declarations: [
    RelatoriosComponent, 
    RelatorioSemanalComponent, RelatorioEvolucaoComponent, RelatorioConcluidoComponent],  
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RelatoriosRoutingModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule
  ],
})
export class RelatoriosModule { }
