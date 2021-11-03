import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TableService, TableResponseModel} from '../_metronic/shared/crud-table';
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
  find(params): Observable<TableResponseModel<Paciente>> {
    return this.http.get<Paciente[]>(this.API_URL, { params }).pipe(
      map(({ data, meta }: any) => {        
        return {
          items: data || [] ,
          total: meta?.page?.elements || 0
        };
      })
    );
  }

  
  findByDescriptionPaciente( search ): Observable<any> {
    return this.http.get(`${this.API_URL}/summaries?search=${search}`).pipe( 
      map(({ data }: any) => {                
        return data || []
      }),
      catchError(err => {
        return []
      })
    )
  }
 
  getById(id : number): Observable<any>{
    return this.http.get<Paciente>(`${this.API_URL}/${id}`).pipe(
      map(({ data }: any) => {        
        return data;
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
