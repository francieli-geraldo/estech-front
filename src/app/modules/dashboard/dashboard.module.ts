import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DailiesTableComponent } from './components/dailies-table/dailies-table.component';
import { DashboardComponent } from './dashboard.component';
import { DailiesChartGroupComponent } from './components/dailies-chart-group/dailies-chart-group.component';
import { DailiesChartComponent } from './components/dailies-chart/dailies-chart.component';
import { DropdownMenusModule } from 'src/app/_metronic/partials/content/dropdown-menus/dropdown-menus.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardComponent,
    DailiesTableComponent,
    DailiesChartGroupComponent,
    DailiesChartComponent
  ],
  exports: [ DashboardComponent ],
  imports: [
    CommonModule,
    DropdownMenusModule,
    InlineSVGModule,
    NgApexchartsModule,
    NgbDropdownModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ])
  ],
})
export class DashboardModule {}
