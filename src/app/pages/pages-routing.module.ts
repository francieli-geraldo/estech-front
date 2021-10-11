import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'pacientes',
        loadChildren: () =>
          import('../modules/pacientes/pacientes.module').then((m) => m.PacientesModule),
      },      
      {
        path: 'programas',
        loadChildren: () =>
          import('../modules/programas/programas.module').then((m) => m.ProgramasModule),
      },      
      {
        path: 'grupos',
        loadChildren: () =>
          import('../modules/grupos/grupos.module').then((m) => m.GruposModule),
      },                
      {
        path: 'razoes-cancelamento',
        loadChildren: () =>
          import('../modules/razoes-cancelamento/razoes-cancelamento.module').then((m) => m.RazoesCancelamentoModule),
      },   
      {
        path: 'contratos',
        loadChildren: () =>
          import('../modules/contratos/contratos.module').then((m) => m.ContratosModule),
      },     
      {
        path: 'relatorios',
        loadChildren: () =>
          import('../modules/relatorios/relatorios.module').then((m) => m.RelatoriosModule),
      },     
      {
        path: 'lancamentos',
        loadChildren: () =>
          import('../modules/lancamentos/lancamentos.module').then((m) => m.LancamentosModule),
      },
      {
        path: 'user-management',
        loadChildren: () =>
          import('../modules/user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('../modules/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
