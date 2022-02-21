import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DropdownMenusModule } from 'src/app/_metronic/partials/content/dropdown-menus/dropdown-menus.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { DailiesChartGroupComponent } from './components/card-charts/dailies-chart-group/dailies-chart-group.component';
import { DailiesChartComponent } from './components/card-charts/dailies-chart/dailies-chart.component';
import { CardChartsComponent } from './components/card-charts/card-charts.component';
import { DailiesTableComponent } from './components/dailies-table/dailies-table.component';
import { SummariesCardComponent } from './components/summaries-card/summaries-card.component';
import { CardDefaultComponent } from './components/summaries-card/card-default/card-default.component';

@NgModule({
  declarations: [
    DashboardComponent,    
    DailiesChartGroupComponent,
    DailiesChartComponent,
    CardChartsComponent,
    DailiesTableComponent,
    SummariesCardComponent,
    CardDefaultComponent,
  ],
  exports: [ DashboardComponent ],
  imports: [
    CommonModule,
    DropdownMenusModule,
    InlineSVGModule,
    NgApexchartsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ])
  ],
})
export class DashboardModule {}
