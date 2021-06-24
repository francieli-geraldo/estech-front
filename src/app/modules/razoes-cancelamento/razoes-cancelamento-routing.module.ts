import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RazoesCancelamentoComponent } from './razoes-cancelamento.component';

const routes: Routes = [
  {
    path: '',
    component: RazoesCancelamentoComponent
  },
  { path: '', redirectTo: 'razoes-cancelamento', pathMatch: 'full' },
  { path: '**', redirectTo: 'razoes-cancelamento', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RazoesCancelamentoRoutingModule { }
