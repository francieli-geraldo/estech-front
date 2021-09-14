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

  ngOnInit() {

    const report = 'total-evolution';
    const params = Object.assign({}, this.form);
    if (params['status'] == "ALL") { delete params["status"] }

    if (!params['patientId']) { delete params['patientId'] }

    delete params["report"];
    delete params["initialDate"];
    delete params["finalDate"];

    this.service$ = this.reportsService.getReport({ report, params })

  }

  getStatus(value) {
    switch (value) {
      case "ACTIVE":
        console.log(value);            
        return 'Ativo';
      case "COMPLETED":
        console.log(value);
        return 'Concluído';
      case "CANCELED":
        console.log(value);
        return 'Cancelado';
      default:
        console.log(value);
        return '';
    }
  }

  showWeight(value){
    return (value !== '' && !!value) ? parseFloat(value).toFixed(3).replace('.',',') : '0,000';
  }

  showPercent(value){
    return (value !== '' && !!value) ? parseFloat(value).toFixed(2).replace('.',',') : '0,00';
  }
}
