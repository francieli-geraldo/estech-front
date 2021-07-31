import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { TableService, TableResponseModel, ITableState, BaseModel } from '../_metronic/shared/crud-table';
import { baseFilter } from '../_fake/fake-helpers/http-extenstions';
import { environment } from '../../environments/environment';
import { Lancamento } from '../models/Lancamento.model';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService extends TableService<Lancamento> implements OnDestroy {
  API_URL = `${environment.apiUrl}/dailies`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }


  find(tableState: ITableState): Observable<TableResponseModel<Lancamento>> {
    return this.http.get<Lancamento[]>(this.API_URL+'?groupId=1&date=2021-06-26').pipe(
      map((response: Lancamento[]) => {        
        return {
          items: response,
          total: response.length  
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

  cancelLancamento(id: number): Observable<any> {
    return this.http.get<Lancamento[]>(this.API_URL).pipe();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
