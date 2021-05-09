import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';
import { PacientesService } from '../../../../services/pacientes.service';

@Component({
  selector: 'app-delete-paciente-modal',
  templateUrl: './delete-paciente-modal.component.html',
  styleUrls: ['./delete-paciente-modal.component.scss']
})
export class DeletePacienteModalComponent implements OnInit {
  
  @Input() id: number;
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor(private service: PacientesService, public modal: NgbActiveModal) { }

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
