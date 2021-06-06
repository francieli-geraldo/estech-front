import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentosComponent } from './lancamentos.component';
const routes: Routes = [
  {
    path: '',
    component: LancamentosComponent
  },
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  { path: '**', redirectTo: 'lancamentos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancamentosRoutingModule { }
