import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DropdownMenusModule } from 'src/app/_metronic/partials/content/dropdown-menus/dropdown-menus.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DailiesChartGroupComponent } from './components/card-charts/dailies-chart-group/dailies-chart-group.component';
import { DailiesChartComponent } from './components/card-charts/dailies-chart/dailies-chart.component';
import { CardChartsComponent } from './components/card-charts/card-charts.component';
import { DailiesTableComponent } from './components/dailies-table/dailies-table.component';
import { CardResumesComponent } from './components/card-resumes/card-resumes.component';
import { CardNewContractsComponent } from './components/card-resumes/card-new-contracts/card-new-contracts.component';
import { CardCompletedContractsComponent } from './components/card-resumes/card-completed-contracts/card-completed-contracts.component';
import { CardReleasesComponent } from './components/card-resumes/card-releases/card-releases.component';
import { CardWeightComponent } from './components/card-resumes/card-weight/card-weight.component';

@NgModule({
  declarations: [
    DashboardComponent,    
    DailiesChartGroupComponent,
    DailiesChartComponent,
    CardChartsComponent,
    DailiesTableComponent,
    CardResumesComponent,
    CardNewContractsComponent,
    CardCompletedContractsComponent,
    CardReleasesComponent,
    CardWeightComponent,
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
