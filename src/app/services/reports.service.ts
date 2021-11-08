import { Injectable, OnDestroy, Inject, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { TableService,} from '../_metronic/shared/crud-table';
import { environment } from '../../environments/environment';
import { Relatorio } from '../models/relatorio.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService extends TableService<Relatorio> implements OnDestroy {
  
  private loading = new BehaviorSubject<boolean>(false);

  API_URL = `${environment.apiUrl}/reports`;
  constructor(@Inject(HttpClient) http, ) {
    super(http);
  }
    
  getReport( { report, params }  ): Observable<any> {    
    params.page = '0';
    params.size =  '9999'
    this.loading.next(false);
    return this.http.get(`${this.API_URL}/${report}`, { params } ).pipe( 
      map((response) => {        
        return response['data']
      }),     
      catchError((err) => {
        return of(undefined);
      }),
      finalize(() => this.loading.next(false))
    )
  }
  
  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
