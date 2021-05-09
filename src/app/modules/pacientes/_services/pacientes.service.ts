import { Injectable, OnDestroy, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { TableService, TableResponseModel, ITableState, BaseModel } from '../../../_metronic/shared/crud-table';
import { baseFilter } from '../../../_fake/fake-helpers/http-extenstions';
import { environment } from '../../../../environments/environment';
import { Paciente } from '../_models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService extends TableService<Paciente> implements OnDestroy {
  API_URL = `${environment.apiUrl}/customers`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  // READ
  find(tableState: ITableState): Observable<TableResponseModel<Paciente>> {
    return this.http.get<Paciente[]>(this.API_URL).pipe(
      map((response: Paciente[]) => {
        const filteredResult = baseFilter(response, tableState);
        const result: TableResponseModel<Paciente> = {
          items: [
            {  id: 1, nome: 'Maria', dt_nascimento: '07/05/1973', sexo: 'Feminino', email: 'maria_rita@gmail.com', celular: '(41) 9 8456-8688'},
            {   id: 2, nome: 'João', dt_nascimento: '07/05/1970', sexo: 'Masculino', email: 'joaozinho087@gmail.com', celular: '(41) 9 9965-5656'},
            {   id: 2, nome: 'João', dt_nascimento: '07/05/1970', sexo: 'Masculino', email: 'joaozinho087@gmail.com', celular: '(41) 9 9965-5656'},
            {   id: 2, nome: 'João', dt_nascimento: '07/05/1970', sexo: 'Masculino', email: 'joaozinho087@gmail.com', celular: '(41) 9 9965-5656'},
            {   id: 2, nome: 'João', dt_nascimento: '07/05/1970', sexo: 'Masculino', email: 'joaozinho087@gmail.com', celular: '(41) 9 9965-5656'},
            {   id: 2, nome: 'João', dt_nascimento: '07/05/1970', sexo: 'Masculino', email: 'joaozinho087@gmail.com', celular: '(41) 9 9965-5656'},
            {   id: 2, nome: 'João', dt_nascimento: '07/05/1970', sexo: 'Masculino', email: 'joaozinho087@gmail.com', celular: '(41) 9 9965-5656'},
            {   id: 2, nome: 'João', dt_nascimento: '07/05/1970', sexo: 'Masculino', email: 'joaozinho087@gmail.com', celular: '(41) 9 9965-5656'},
            {   id: 2, nome: 'João', dt_nascimento: '07/05/1970', sexo: 'Masculino', email: 'joaozinho087@gmail.com', celular: '(41) 9 9965-5656'},
            {   id: 2, nome: 'João', dt_nascimento: '07/05/1970', sexo: 'Masculino', email: 'joaozinho087@gmail.com', celular: '(41) 9 9965-5656'},
            {   id: 2, nome: 'João', dt_nascimento: '07/05/1970', sexo: 'Masculino', email: 'joaozinho087@gmail.com', celular: '(41) 9 9965-5656'}
          ],
          total: 100
        };
        console.log(result);
 
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

  updateStatusForItems(ids: number[], status: number): Observable<any> {
    return this.http.get<Paciente[]>(this.API_URL).pipe(
      map((customers: Paciente[]) => {
        return customers.filter(c => ids.indexOf(c.id) > -1).map(c => {
          // c.status = status;
          return c;
        });
      }),
      exhaustMap((customers: Paciente[]) => {
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
