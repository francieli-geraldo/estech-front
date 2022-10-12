import { formatDate } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CompletedReport } from 'src/app/models/relatorio.model';
import { ReportsService } from 'src/app/services/reports.service';
import { AuthService } from '../../auth';

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
  isEmpty: boolean;
  isLoading: boolean;
  groupNameSelected: string;

  private _isEmpty: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _groupNameSelected: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private subscriptions: Subscription[] = [];

  constructor(private reportsService: ReportsService, private authService: AuthService) { }

  ngOnInit(){
   
    const report = 'periodic';    
    const params = Object.assign({}, this.form);
    params['status'] = 'COMPLETED'
        
    if(!params['patientId']){ delete params['patientId'] }
      
    delete params["report"];
    delete params["initialDate"];
    delete params["finalDate"];

  this._isLoading.next(true)

  this.service$ = this.reportsService.getReport({ report, params })
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
}
