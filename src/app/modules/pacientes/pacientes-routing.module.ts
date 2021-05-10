import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductEditComponent } from '../e-commerce/products/product-edit/product-edit.component';
import { EditPacienteComponent } from './paciente-edit/edit-paciente.component';
import { PacientesComponent } from './pacientes.component';

const routes: Routes = [
  {
    path: '',
    component: PacientesComponent
  },{
    path: 'add',
    component: EditPacienteComponent
  },
  {
    path: 'edit',
    component: EditPacienteComponent
  },
  {
    path: 'edit/:id',
    component: EditPacienteComponent
  },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: '**', redirectTo: 'customers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesRoutingModule { }
