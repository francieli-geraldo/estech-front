import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs';
import { catchError, exhaustMap, finalize, map, tap } from 'rxjs/operators';
import { TableService, TableResponseModel, ITableState, BaseModel } from '../_metronic/shared/crud-table';
import { baseFilter } from '../_fake/fake-helpers/http-extenstions';
import { environment } from '../../environments/environment';
import { Relatorio } from '../models/relatorio.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService extends TableService<Relatorio> implements OnDestroy {
  
  private loading = new BehaviorSubject<boolean>(false);

  API_URL = `${environment.apiUrl}/`;
  constructor(@Inject(HttpClient) http, ) {
    super(http);
  }
  
  getReport( { report, params }  ): Observable<any> {    
    this.loading.next(false);
    return this.http.get<Relatorio>(`${this.API_URL}/${report}`, { params } ).pipe(
      catchError((err) => {
        console.log('err', err);
        return of(undefined);
      }),
      finalize(() => this.loading.next(false))
    )
  }
  
  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
