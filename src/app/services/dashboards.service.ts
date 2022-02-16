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
    let params = { date: this.getCurrentDate()}
    return this.http.get(`${this.API_URL}/launched-pending`, { params }).pipe( 
      map((response) => {        
        return response['data']
      }),     
      catchError((err) => {
        return of(undefined);
      })
    )
  }

  getDailyPostingPending(groupId): Observable<any> {
    let params = {
      date: this.getCurrentDate(),
      groupId: groupId
    }
    return this.http.get(`${this.API_URL}/daily-posting-pending`, { params }).pipe( 
      map((response) => {        
        return response['data']
      }),     
      catchError((err) => {
        return of(undefined);
      })
    )
  }

  getCurrentDate(){
    var today = new Date();
    return today.getFullYear()+'-'+(("00"+today.getMonth()+1).slice(-2))+'-'+(("00"+today.getDate()).slice(-2));
  }

}
