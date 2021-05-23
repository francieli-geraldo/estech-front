import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RelatoriosComponent } from './relatorios.component';


const routes: Routes = [
  {
    path: '',
    component: RelatoriosComponent
  },
  { path: '', redirectTo: 'contratos', pathMatch: 'full' },
  { path: '**', redirectTo: 'contratos', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
