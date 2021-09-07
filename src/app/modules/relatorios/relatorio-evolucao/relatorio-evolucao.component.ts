import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FullReport } from 'src/app/models/relatorio.model';
import { ReportsService } from 'src/app/services/reports.service';


@Component({
  selector: 'app-relatorio-evolucao',
  templateUrl: './relatorio-evolucao.component.html',
  styleUrls: ['./relatorio-evolucao.component.scss']
})
export class RelatorioEvolucaoComponent implements OnInit {

  @Input() form: any;  
  @Output() output = new EventEmitter();
 
  service: FullReport[];
  service$: Observable<FullReport[]>;

  constructor(private reportsService: ReportsService) { }

  ngOnInit(){
   
    const report = this.form.report;    
    const params = Object.assign({}, this.form);
    delete params["report"];

    this.service$ = this.reportsService.getReport({ report, params });

  }
}
