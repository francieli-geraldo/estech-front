import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { TableService, TableResponseModel, BaseModel } from '../_metronic/shared/crud-table';
import { environment } from '../../environments/environment';
import { Programa } from '../models/programa.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService extends TableService<Programa> implements OnDestroy {
  API_URL = `${environment.apiUrl}/programs`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  // READ
  find(params): Observable<TableResponseModel<Programa>> {
    return this.http.get<Programa[]>(this.API_URL, { params }).pipe(
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

  cancelContrato(id: number): Observable<any> {
    return this.http.get<Programa[]>(this.API_URL).pipe();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
