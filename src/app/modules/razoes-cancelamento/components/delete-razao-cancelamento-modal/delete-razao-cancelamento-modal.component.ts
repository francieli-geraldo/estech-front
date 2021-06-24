import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';
import { RazoesCancelamentoService } from 'src/app/services/razoes-cancelamento.service';

@Component({
  selector: 'app-delete-razao-cancelamento-modal',
  templateUrl: './delete-razao-cancelamento-modal.component.html',
  styleUrls: ['./delete-razao-cancelamento-modal.component.scss']
})
export class DeleteRazaoCancelamentoModalComponent implements OnInit {

  @Input() id: number;
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private service: RazoesCancelamentoService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  delete() {
    this.isLoading = true;
    const sb = this.service.delete(this.id).pipe(
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