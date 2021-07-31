import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { TableService, TableResponseModel, ITableState, BaseModel } from '../_metronic/shared/crud-table';
import { baseFilter } from '../_fake/fake-helpers/http-extenstions';
import { environment } from '../../environments/environment';
import { Grupo } from '../models/grupo.model';

@Injectable({
  providedIn: 'root'
})
export class GruposService extends TableService<Grupo> implements OnDestroy {
  API_URL = `${environment.apiUrl}/groups`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  find(tableState: ITableState): Observable<TableResponseModel<Grupo>> {
    return this.http.get<Grupo[]>(this.API_URL).pipe(
      map((response: Grupo[]) => {
          
        const result: TableResponseModel<Grupo> = {
          items: response['content'],
          total: response['totalElements']
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
    return this.http.get<Grupo[]>(this.API_URL).pipe();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
