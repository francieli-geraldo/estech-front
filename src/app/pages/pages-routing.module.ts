import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
        path: 'builder',
        loadChildren: () =>
          import('./builder/builder.module').then((m) => m.BuilderModule),
      },
      {
        path: 'ecommerce',
        loadChildren: () =>
          import('../modules/e-commerce/e-commerce.module').then(
            (m) => m.ECommerceModule
          ),
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
        path: 'ngbootstrap',
        loadChildren: () =>
          import('../modules/ngbootstrap/ngbootstrap.module').then(
            (m) => m.NgbootstrapModule
          ),
      },
      {
        path: 'wizards',
        loadChildren: () =>
          import('../modules/wizards/wizards.module').then(
            (m) => m.WizardsModule
          ),
      },
      {
        path: 'material',
        loadChildren: () =>
          import('../modules/material/material.module').then(
            (m) => m.MaterialModule
          ),
      },
      {
        path: '',
        redirectTo: 'lancamentos',
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
