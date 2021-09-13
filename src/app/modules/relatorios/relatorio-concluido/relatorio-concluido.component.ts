import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CompletedReport } from 'src/app/models/relatorio.model';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-relatorio-concluido',
  templateUrl: './relatorio-concluido.component.html',
  styleUrls: ['./relatorio-concluido.component.scss']
})
export class RelatorioConcluidoComponent implements OnInit {

  @Input() form: any;  
  @Output() output = new EventEmitter();
 
  service: CompletedReport[];
  service$: Observable<CompletedReport[]>;

  constructor(private reportsService: ReportsService) { }

  ngOnInit(){
   
    const report = 'periodic';    
    const params = Object.assign({}, this.form);
    params['status'] = 'COMPLETED'
    delete params["report"];
    delete params["initialDate"];
    delete params["finalDate"];

    this.service$ = this.reportsService.getReport({ report, params })
  }

}
