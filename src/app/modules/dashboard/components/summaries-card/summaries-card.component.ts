import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DashboardsService } from 'src/app/services/dashboards.service';

@Component({
  selector: 'app-summaries-card',
  templateUrl: './summaries-card.component.html',
  styleUrls: ['./summaries-card.component.scss']
})
export class SummariesCardComponent implements OnInit {
  
  result$: Observable<any>;
  isShowCard: boolean = false;

  constructor(private dashboardsService: DashboardsService) {
    this.result$ = new BehaviorSubject<any>(null);
  }

  ngOnInit(): void {    
    this.result$ = this.dashboardsService.getSummary();
  }

}
