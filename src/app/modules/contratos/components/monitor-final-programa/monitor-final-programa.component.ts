import { formatDate } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CompletedReport } from 'src/app/models/relatorio.model';
import { AuthService } from 'src/app/modules/auth';
import { ContratosService } from 'src/app/services/contratos.service';


@Component({
  selector: 'app-monitor-final-programa',
  templateUrl: './monitor-final-programa.component.html',
  styleUrls: ['./monitor-final-programa.component.scss']
})
export class MonitorFinalProgramaComponent implements OnInit {

  @Input() form: any;
  @Output() output = new EventEmitter();

  service: CompletedReport[];
  service$: Observable<CompletedReport>;
  isEmpty: boolean;
  isLoading: boolean;
  programNameSelected: string;
  agreementId: number;

  private _isEmpty: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _programNameSelected: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private subscriptions: Subscription[] = [];

  constructor(private contratosService:  ContratosService, private authService: AuthService, public modal: NgbActiveModal) { }

  ngOnInit() {
    this._isLoading.next(true)

    this.service$ = this.contratosService.getProgramMonitoring(this.agreementId)
    this.service$.subscribe((res) => {
      const isEmpty = res == undefined;
      this._isEmpty.next(isEmpty)

      let programName = "";
      if(!isEmpty) {
        programName = res.programName;
      }
      this._programNameSelected.next(programName);
    });
    this.service$.subscribe(() => this._isLoading.next(false));

    this.subscriptions
      .push(
        this._isEmpty.subscribe((isEmpty: boolean) => this.isEmpty = isEmpty),
        this._isLoading.subscribe((isLoading: boolean) => this.isLoading = isLoading),
        this._programNameSelected.subscribe((programNameSelected: string) => this.programNameSelected = programNameSelected)
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

  getagreementId() {return this.agreementId}
}
