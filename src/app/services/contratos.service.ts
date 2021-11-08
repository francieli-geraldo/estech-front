import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, exhaustMap, finalize, map } from 'rxjs/operators';
import { TableService, TableResponseModel, BaseModel } from '../_metronic/shared/crud-table';
import { environment } from '../../environments/environment';
import { Contrato } from '../models/contrato.model';

@Injectable({
  providedIn: 'root'
})
export class ContratosService extends TableService<Contrato> implements OnDestroy {
  API_URL = `${environment.apiUrl}/agreements`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  find(params): Observable<TableResponseModel<Contrato>> {
    return this.http.get<Contrato[]>(this.API_URL, { params }).pipe(
      map(({ data, meta }: any) => {        
        return {
          items: data || [] ,
          total: meta?.page?.elements || 0
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

  updateStatusContrato(id: number, register) {     
    return this.http.put<any>(`${this.API_URL}/${id}`, register);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
