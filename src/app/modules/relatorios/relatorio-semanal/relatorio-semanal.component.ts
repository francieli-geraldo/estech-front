import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ReportsService } from 'src/app/services/reports.service';
import { Observable, Subscription } from 'rxjs';
import { PeriodicReport } from 'src/app/models/relatorio.model';


@Component({
  selector: 'app-relatorio-semanal',
  templateUrl: './relatorio-semanal.component.html',
  styleUrls: ['./relatorio-semanal.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ],
})

export class RelatorioSemanalComponent implements OnInit {

  @Input() form: any;  
  @Output() output = new EventEmitter();
 
  service: PeriodicReport[];
  service$: Observable<PeriodicReport[]>;

  constructor(private reportsService: ReportsService) { }

  ngOnInit(){
   
    const report = this.form.report;    
    const params = Object.assign({}, this.form);
    delete params["report"];

    this.service$ = this.reportsService.getReport({ report, params });

  }
}
