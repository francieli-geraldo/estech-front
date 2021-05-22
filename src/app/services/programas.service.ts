import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { TableService, TableResponseModel, ITableState, BaseModel } from '../_metronic/shared/crud-table';
import { baseFilter } from '../_fake/fake-helpers/http-extenstions';
import { environment } from '../../environments/environment';
import { Programa } from '../models/programa.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService extends TableService<Programa> implements OnDestroy {
  API_URL = `${environment.apiUrl}/customers`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  // READ
  find(tableState: ITableState): Observable<TableResponseModel<Programa>> {
    return this.http.get<Programa[]>(this.API_URL).pipe(
      map((response: Programa[]) => {
        const filteredResult = baseFilter([
          { id: 1,nome: 'teste 1',descricao: 'teste descricao 1'},
          { id: 2,nome: 'teste 2',descricao: 'teste descricao 2'},
          { id: 3,nome: 'teste 3',descricao: 'teste descricao 3'}
        ], tableState);
        const result: TableResponseModel<Programa> = {
          items: filteredResult.items,
          total: filteredResult.total
        };
        return result;
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
    return this.http.get<Programa[]>(this.API_URL).pipe();
  }

  updateStatusForItems(ids: number[], status: number): Observable<any> {
    return this.http.get<Programa[]>(this.API_URL).pipe(
      map((customers: Programa[]) => {
        return customers.filter(c => ids.indexOf(c.id) > -1).map(c => {
          // c.status = status;
          return c;
        });
      }),
      exhaustMap((customers: Programa[]) => {
        const tasks$ = [];
        customers.forEach(customer => {
          tasks$.push(this.update(customer));
        });
        return forkJoin(tasks$);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
