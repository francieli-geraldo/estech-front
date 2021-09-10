import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { TableService, TableResponseModel, BaseModel } from '../_metronic/shared/crud-table';
import { baseFilter } from '../_fake/fake-helpers/http-extenstions';
import { environment } from '../../environments/environment';
import { Contrato } from '../models/contrato.model';

@Injectable({
  providedIn: 'root'
})
export class ContratosService extends TableService<Contrato> implements OnDestroy {
  API_URL = `${environment.apiUrl}/1/agreements`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }


  find(tableState): Observable<TableResponseModel<Contrato>> {
    return this.http.get<Contrato[]>(this.API_URL).pipe(
      map((response: Contrato[]) => {        
        return {
          items: response['content'],
          total: response['totalElements']  
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
    return this.http.get<Contrato[]>(this.API_URL).pipe();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
