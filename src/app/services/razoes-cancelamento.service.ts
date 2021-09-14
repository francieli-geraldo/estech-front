import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableService, TableResponseModel } from '../_metronic/shared/crud-table';
import { environment } from '../../environments/environment';
import { RazaoCancelamento } from '../models/razao-cancelamento.model';

@Injectable({
  providedIn: 'root'
})
export class RazoesCancelamentoService extends TableService<RazaoCancelamento> implements OnDestroy {
  API_URL = `${environment.apiUrl}/reason-cancellations`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  // READ
  find(params): Observable<TableResponseModel<RazaoCancelamento>> {
    return this.http.get<RazaoCancelamento[]>(this.API_URL, { params }).pipe(
      map((response: any) => {        
        return {
          items: response?.content || [] ,
          total: response?.totalElements || 0
        };
      })
    );
  }

  deleteItems(ids: number[] = []): Observable<any> {
    const tasks$ = [];
    ids.forEach(id => {
      tasks$.push(this.delete(id));
    });
    return forkJoin(tasks$);
  }

  cancelContrato(id: number): Observable<any> {
    return this.http.get<RazaoCancelamento[]>(this.API_URL).pipe();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
