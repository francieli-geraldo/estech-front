// /dashboards/summary
import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, exhaustMap, finalize, map } from 'rxjs/operators';
import { TableService, TableResponseModel, BaseModel } from '../_metronic/shared/crud-table';
import { environment } from '../../environments/environment';
import { Contrato } from '../models/contrato.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService {
  
  API_URL = `${environment.apiUrl}/dashboards`;
  
  http: HttpClient;
  
  constructor(@Inject(HttpClient) http) {
    this.http = http;
  }

  getSummary(): Observable<any> {    
    return this.http.get(`${this.API_URL}/summary`).pipe( 
      map((response) => {        
        return response['data']
      }),     
      catchError((err) => {
        return of(undefined);
      })
    )
  }

  getLaunchedPending(): Observable<any> {    
    var d= new Date();
    d.getFullYear()
    d.getMonth()
    d.getDate()
    let params = {date: '2022-02-05'}
    return this.http.get(`${this.API_URL}/launched-pending`, { params }).pipe( 
      map((response) => {        
        return response['data']
      }),     
      catchError((err) => {
        return of(undefined);
      })
    )
  }

}
