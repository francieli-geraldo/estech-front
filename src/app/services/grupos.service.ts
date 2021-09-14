import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableService, TableResponseModel } from '../_metronic/shared/crud-table';
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

  find(params): Observable<TableResponseModel<Grupo>> {
    return this.http.get<Grupo[]>(this.API_URL, {params}).pipe(
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
    return this.http.get<Grupo[]>(this.API_URL).pipe();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
