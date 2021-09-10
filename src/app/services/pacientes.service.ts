import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { TableService, TableResponseModel, BaseModel } from '../_metronic/shared/crud-table';
import { baseFilter } from '../_fake/fake-helpers/http-extenstions';
import { environment } from '../../environments/environment';
import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService extends TableService<Paciente> implements OnDestroy {
  API_URL = `${environment.apiUrl}/patients`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  // READ
  find(tableState): Observable<TableResponseModel<Paciente>> {
    return this.http.get<Paciente[]>(this.API_URL).pipe(
      map((response: Paciente[]) => {        
        return {
          items: response['content'],
          total: response['totalElements']  
        };
      })
    );
  }
 
  getById(id : number): Observable<any>{
    return this.http.get<Paciente>(`${this.API_URL}/${id}`).pipe(
      map((response: Paciente) => {        
        return response;
      }),
      catchError((err) => {
        return of(undefined);
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

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
