import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { FullReport } from 'src/app/models/relatorio.model';
import { ReportsService } from 'src/app/services/reports.service';
import { AuthService } from '../../auth';


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

  isEmpty: boolean;
  isLoading: boolean;
  groupNameSelected: string;

  private _isEmpty: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _groupNameSelected: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private subscriptions: Subscription[] = [];

  constructor(private reportsService: ReportsService, private authService: AuthService) { }

  ngOnInit() {

    const report = 'total-evolution';
    const params = Object.assign({}, this.form);
    if (params['status'] == "ALL") { delete params["status"] }

    if (!params['patientId']) { delete params['patientId'] }

    delete params["report"];
    delete params["initialDate"];
    delete params["finalDate"];

    this._isLoading.next(true)
    this.service$ = this.reportsService.getReport({ report, params });
    this.service$.subscribe((res) => {
      const isEmpty = res?.length == 0 || res == undefined;
      this._isEmpty.next(isEmpty)
      this._groupNameSelected.next(isEmpty ? '' : 'Grupo: ' + res[0].groupName)
    });
    this.service$.subscribe(() => this._isLoading.next(false));

    this.subscriptions
      .push(
          this._isEmpty.subscribe((isEmpty: boolean) => this.isEmpty = isEmpty),
          this._isLoading.subscribe((isLoading: boolean) => this.isLoading = isLoading),
          this._groupNameSelected.subscribe((groupNameSelected: string) => this.groupNameSelected = groupNameSelected)
      );
  }

  getDateAndTime() {
    return formatDate(new Date(), 'dd/MM/yyyy - HH:mm:ss', 'pt-BR')
  }

  getUsername() {
    return this.authService.getUserFromLocalStorage().name;
  }
  
  getStatus(value) {
    switch (value) {
      case "ACTIVE":
        return 'Ativo';
      case "COMPLETED":
        return 'Concluído';
      case "CANCELED":
        return 'Cancelado';
      case "OVERDUE":
        return 'Vencido';
      case "OVERDUE_LESS_7":
        return 'Venc. 7d';
      case "OVERDUE_LESS_15":
        return 'Venc. 15d';
      case "OVERDUE_LESS_30":
        return 'Venc. 30d';
      default:
        return '';
    }
  }

}
