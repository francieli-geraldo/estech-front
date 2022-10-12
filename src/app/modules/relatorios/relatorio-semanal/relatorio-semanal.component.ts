import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ReportsService } from 'src/app/services/reports.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PeriodicReport } from 'src/app/models/relatorio.model';
import { formatDate } from '@angular/common';
import { AuthService } from '../../auth';


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

    if(params['status'] == "ALL"){
      delete params["status"];
    }

    if(!params['patientId']){ delete params['patientId'] }

    delete params["report"];

    this._isLoading.next(true)

    this.service$ = this.reportsService.getReport({ report, params });
    this.service$.subscribe((res) => {
      const isEmpty = res?.length == 0 || res == undefined;
      this._isEmpty.next(isEmpty)
      this._groupNameSelected.next(isEmpty ? '' : ' - Grupo: ' + res[0].groupName)
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
