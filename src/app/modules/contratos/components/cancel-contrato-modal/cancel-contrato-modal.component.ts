import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';
import { ContratosService } from 'src/app/services/contratos.service';
import { CustomAdapter, CustomDateParserFormatter } from 'src/app/_metronic/core';

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
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private service: ContratosService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  cancel() {
    this.isLoading = true;
    const sb = this.service.cancelContrato(this.id).pipe(
      delay(1000), // Remove it from your code (just for showing loading)
      tap(() => this.modal.close()),
      catchError((err) => {
        this.modal.dismiss(err);
        return of(undefined);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe();
    this.subscriptions.push(sb);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}
