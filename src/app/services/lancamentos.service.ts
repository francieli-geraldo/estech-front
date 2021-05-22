import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { TableService, TableResponseModel, ITableState, BaseModel } from '../_metronic/shared/crud-table';
import { baseFilter } from '../_fake/fake-helpers/http-extenstions';
import { environment } from '../../environments/environment';
import { Lancamento } from '../models/lancamento.model';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService extends TableService<Lancamento> implements OnDestroy {
  
  API_URL = `${environment.apiUrl}/customers`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  // READ
  find(tableState: ITableState): Observable<TableResponseModel<Lancamento>> {
    
      return this.http.get<Lancamento[]>(this.API_URL).pipe(
        map((response: LancamentoBase[]) => {
          
          let lancamentos = new Array<LancamentoBase>();
          const lancamentos_data_base = [
            { id: 1, data: new Date('05/10/2021').toLocaleDateString(), cm: true,  lm: false, al: true, lt: true, jt: true, exercicio: false,  balanca: false, peso_anterior: 100, peso_atual: 99.800, evolucao: .200, evolucao_acumulada: 50.20, editable: false },
            { id: 2, data: new Date('05/09/2021').toLocaleDateString(), cm: true,  lm: false, al: false, lt: false, jt: true, exercicio: false,  balanca: false, peso_anterior: 100, peso_atual: 99.800, evolucao: .200, evolucao_acumulada: 50.20, editable: false}          
          ];
          const filteredResult = baseFilter(response, tableState);

          let valuesInPeriod = this._lancamentosByPeriod(new Date('02/05/2021'), new Date());
          console.log(valuesInPeriod);
          
          lancamentos_data_base.map(el => { valuesInPeriod[el.data] = el; })

          Object.keys(valuesInPeriod).forEach((element) => {
            lancamentos.push(valuesInPeriod[element]);            
          });          

          
  

          const result: TableResponseModel<Lancamento> = {
            items: lancamentos,
            total: 100
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

  cancelLancamento(id: number): Observable<any> {
    return this.http.get<Lancamento[]>(this.API_URL).pipe();
  }

  updateStatusForItems(ids: number[], status: number): Observable<any> {
    return this.http.get<Lancamento[]>(this.API_URL).pipe(
      map((customers: Lancamento[]) => {
        return customers.filter(c => ids.indexOf(c.id) > -1).map(c => {
          // c.status = status;
          return c;
        });
      }),
      exhaustMap((customers: Lancamento[]) => {
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


  _lancamentosByPeriod(startDate, stopDate){


    // const datePipe = new DatePipe("en-US");
    let dates = new Array();
    let currentDate = stopDate;
    console.log(`Start:${startDate}`);
    console.log(`currentDate: ${currentDate}`);
    console.log(currentDate > startDate);
    
    
    while (startDate < currentDate) {      
      // let date = datePipe.transform(currentDate, 'MM/dd/yyyy');
      let date = currentDate.toLocaleDateString();
      let lancamento = {
        id: undefined,
        data: date,
        cm: false,
        lm: false,
        al: false,
        lt: false,
        jt: false,
        exercicio: false,
        balanca: false,
        peso_anterior: 0,
        peso_atual: 0,
        evolucao: 0,
        evolucao_acumulada: 0
      };
      dates[date] = lancamento;            
      currentDate = currentDate.addDays(-1);
    }

    return dates;
  }
}

export interface LancamentoBase {
    id: undefined,
    data: '',
    cm: false,
    lm: false,
    al: false,
    lt: false,
    jt: false,
    exercicio: false,
    balanca: false,
    peso_anterior: 0,
    peso_atual: 0,
    evolucao: 0,
    evolucao_acumulada: 0,
    editable: false
}
