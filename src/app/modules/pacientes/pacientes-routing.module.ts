import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  { path: '', redirectTo: 'pacientes', pathMatch: 'full' },
  { path: '**', redirectTo: 'pacientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesRoutingModule { }
