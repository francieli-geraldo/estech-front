import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, of, Subject, Subscription } from 'rxjs';
import { catchError, delay, finalize, map, tap } from 'rxjs/operators';
import { ContratosService } from 'src/app/services/contratos.service';
import { CustomAdapter, CustomDateParserFormatter } from 'src/app/_metronic/core';

import { Notify } from '../../../../../assets/js/layout/extended/messages/notify';

@Component({
  selector: 'app-cancel-contrato-modal',
  templateUrl: './cancel-contrato-modal.component.html',
  styleUrls: ['./cancel-contrato-modal.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]  
  })
export class CancelContratoModalComponent implements OnInit {

  @Input() id: number;
  @Input() nomeCliente: string;
  @Input() register;

  isLoading = false;
  isEditable = false;
  isDisabled = true;
  reasonCancellation: string = '';
  cancellationDate: Date;
  subscriptions: Subscription[] = [];

  currentDate : Date = new Date();
  
  constructor(private service: ContratosService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  showFieldObservacao() {
    this.isEditable = true;
  }

  cancel() {    
    this.isLoading = true;
    this.register.reasonCancellation = this.reasonCancellation;
    this.register.cancellationDate = this.cancellationDate;
    this.register.status = 'CANCELED';
    this.register.groupId = this.register.group.id;
    this.register.programId = this.register.program.id;
    
    const sb = this.service.updateStatusContrato(this.id, this.register).pipe(
      tap(() => {        
        new Notify({ message: 'Contrato cancelado com sucesso!', type: 'success' }).show();
        this.modal.close()
      }),
      catchError((err) => {
        this.modal.dismiss(err);
        return of(undefined);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    ).  subscribe();
    this.subscriptions.push(sb);
  }

  onChange(event){
    this.isDisabled = !(event?.length > 0);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}
