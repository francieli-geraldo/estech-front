import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from 'src/app/models/grupo.model';
import { DashboardsService } from 'src/app/services/dashboards.service';
import { GruposService } from 'src/app/services/grupos.service';

@Component({
  selector: 'app-dailies-table',
  templateUrl: './dailies-table.component.html',
  styleUrls: ['./dailies-table.component.scss'],
})
export class DailiesTableComponent {
  
  @Input() cssClass;
  listGroups$: Observable<Grupo[]>;
  listDailyPostingPending$: Observable<any[]>;
    
  constructor(
    public dashboardsService: DashboardsService,
    public grupoService: GruposService) { }

  ngOnInit(): void {
    this.listGroups$ = this.grupoService.findParams({ params: { page: '0', size: '9999' }});
    this.listGroups$.subscribe(data => {
        this.generateGrid(data[0].id);
      }
    );
  }

  generateGrid(groupId) {
    this.listDailyPostingPending$ = this.dashboardsService.getDailyPostingPending(groupId)    
  }

}
