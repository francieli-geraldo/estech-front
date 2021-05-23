import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductEditComponent } from '../e-commerce/products/product-edit/product-edit.component';
import { ContratosComponent } from './contratos.component';

const routes: Routes = [
  {
    path: '',
    component: ContratosComponent
  },
  // {
  //   path: 'add',
  //   component: EditPacienteComponent
  // },
  // {
  //   path: 'edit',
  //   component: EditPacienteComponent
  // },
  // {
  //   path: 'edit/:id',
  //   component: EditPacienteComponent
  // },
  { path: '', redirectTo: 'contratos', pathMatch: 'full' },
  { path: '**', redirectTo: 'contratos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratosRoutingModule { }
