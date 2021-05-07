import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesComponent } from './pacientes.component';

const routes: Routes = [
  {
    path: '',
    component: PacientesComponent,
    children: [
      {
        path: 'new',
        component: PacientesComponent,
      },
      { path: '', redirectTo: 'profile-overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'profile-overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesRoutingModule { }
