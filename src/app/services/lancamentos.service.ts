import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { TableService } from '../_metronic/shared/crud-table';
import { environment } from '../../environments/environment';
import { Lancamento } from '../models/lancamento.model';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService extends TableService<Lancamento> implements OnDestroy {

  // private loading = new BehaviorSubject<boolean>(false);

  API_URL = `${environment.apiUrl}/dailies`;

  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  editLancamento({ register, agreementId, patientId }) {
    return this.http.post(`${environment.apiUrl}/${patientId}/agreements/${agreementId}/dailies`, register).subscribe(
      (response) => { console.log(response) }
    )
  }

  deleteItems(ids: number[] = []): Observable<any> {
    const tasks$ = [];
    ids.forEach(id => {
      tasks$.push(this.delete(id));
    });
    return forkJoin(tasks$);
  }

  cancelLancamento(id: number): Observable<any> {
    return this.http.get<Lancamento[]>(this.API_URL).pipe();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
