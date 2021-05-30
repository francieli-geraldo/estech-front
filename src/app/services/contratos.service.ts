import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { TableService, TableResponseModel, ITableState, BaseModel } from '../_metronic/shared/crud-table';
import { baseFilter } from '../_fake/fake-helpers/http-extenstions';
import { environment } from '../../environments/environment';
import { Contrato } from '../models/contrato.model';

@Injectable({
  providedIn: 'root'
})
export class ContratosService extends TableService<Contrato> implements OnDestroy {
  API_URL = `${environment.apiUrl}/customers`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  // READ
  find(tableState: ITableState): Observable<TableResponseModel<Contrato>> {
    return this.http.get<Contrato[]>(this.API_URL).pipe(
      map((response: Contrato[]) => {

        const filteredResult = baseFilter([
          { id: 1,programa: 1,grupo: 1,dt_inicio: '05/30/2021',dt_conclusao: '06/01/2021', status: 1, peso_inicial: 120.500, meta: 64,objetivo: 60, plus: true, dt_contratacao_plus: '05/30/2021', dt_cancelamento_plus: '06/01/2021', dt_cancelamento: '',motivo: '',observacao: ''},
          { id: 2,programa: 1,grupo: 1,dt_inicio: '04/20/2021',dt_conclusao: '04/30/2021',status: 2,peso_inicial: 150.500, meta: 100,objetivo: 50.500, plus: false, dt_contratacao_plus: '',dt_cancelamento_plus: '',dt_cancelamento: '',motivo: '',observacao: ''  }           
        ] , tableState);
          
        const result: TableResponseModel<Contrato> = {
          items: filteredResult.items,
          total: filteredResult.total
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
    return this.http.get<Contrato[]>(this.API_URL).pipe();
  }

  updateStatusForItems(ids: number[], status: number): Observable<any> {
    return this.http.get<Contrato[]>(this.API_URL).pipe(
      map((customers: Contrato[]) => {
        return customers.filter(c => ids.indexOf(c.id) > -1).map(c => {
          // c.status = status;
          return c;
        });
      }),
      exhaustMap((customers: Contrato[]) => {
        const tasks$ = [];
        customers.forEach(customer => {
          tasks$.push(this.update(customer));
        });
        return forkJoin(tasks$);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
