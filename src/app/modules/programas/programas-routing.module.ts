import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProgramasComponent } from './programas.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramasComponent
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
  { path: '', redirectTo: 'programas', pathMatch: 'full' },
  { path: '**', redirectTo: 'programas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramasRoutingModule { }
