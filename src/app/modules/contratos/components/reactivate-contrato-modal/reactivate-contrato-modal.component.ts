import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, of, Subject, Subscription } from 'rxjs';
import { catchError, delay, finalize, map, tap } from 'rxjs/operators';
import { ContratosService } from 'src/app/services/contratos.service';
import { CustomAdapter, CustomDateParserFormatter } from 'src/app/_metronic/core';

import { Notify } from '../../../../../assets/js/layout/extended/messages/notify';

@Component({
  selector: 'app-reactivate-contrato-modal',
  templateUrl: './reactivate-contrato-modal.component.html',
  styleUrls: ['./reactivate-contrato-modal.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]  
  })
export class ReactivateContratoModalComponent {

  @Input() id: number;
  @Input() nomeCliente: string;
  @Input() register;

  subscriptions: Subscription[] = [];
  isEditable = false;
  isDisabled = true;
  newHiringDate;

  currentDate : Date = new Date();
  
  constructor(private service: ContratosService, public modal: NgbActiveModal) { }

  showFieldObservacao() {
    this.isEditable = true;
  }

  onChange(event){
    this.isDisabled = !(event?.length > 0);
  }

  reactivate(){
    this.register.status = 'ACTIVE';
    this.register.groupId = this.register.group.id;
    this.register.programId = this.register.program.id;
    delete this.register.cancellationDate;
    delete this.register.reasonCancellation; 
    delete this.register.dateConclusion; 
    if(this.register.status == 'COMPLETED'){
      this.register.hiringDate = this.newHiringDate;
    }
    const sb = this.service.updateStatusContrato(this.id, this.register).pipe(
      tap(() => {        
        new Notify({ message: 'Contrato reativado com sucesso!', type: 'success' }).show();
        this.modal.close()
      }),
      catchError((err) => {
        this.modal.dismiss(err);
        return of(undefined);
      })
    ).subscribe();
    this.subscriptions.push(sb);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}
