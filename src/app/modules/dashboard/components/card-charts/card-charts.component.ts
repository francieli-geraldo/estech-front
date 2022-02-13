import { Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DashboardsService } from 'src/app/services/dashboards.service';

@Component({
  selector: 'app-card-charts',
  templateUrl: './card-charts.component.html',
  styleUrls: ['./card-charts.component.scss'],
})
export class CardChartsComponent {

  launchedPending$: Observable<any>;

  constructor(private dashboardsService: DashboardsService) {
    this.launchedPending$ = new BehaviorSubject<any>(null);
  }

  ngOnInit(): void {    
    this.launchedPending$ =this.dashboardsService.getLaunchedPending()
  }

}