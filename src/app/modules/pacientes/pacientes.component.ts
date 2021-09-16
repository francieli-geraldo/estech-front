
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  GroupingState,
  PaginatorState,
  SortState,
  ICreateAction,
  IEditAction,
  IDeleteAction,
  IDeleteSelectedAction,
  IFetchSelectedAction,
  IUpdateStatusForSelectedAction,
  ISortView,
  IFilterView,
  IGroupingView,
  ISearchView,
} from '../../_metronic/shared/crud-table';
import { PacientesService } from '../../services/pacientes.service';
import { FormPacienteModalComponent } from './components/form-paciente-modal/form-paciente-modal.component';
import { DeletePacienteModalComponent } from './components/delete-paciente-modal/delete-paciente-modal.component';
import { RelatorioPacienteModalComponent } from './components/relatorio-paciente-modal/relatorio-paciente-modal.component';
// import { EditPacienteModalComponent } from '../pacientes/components/edit-pacientes-modal/edit-paciente-modal.component';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent 
  implements
  OnInit,
  OnDestroy,
  ICreateAction,
  IEditAction,
  ISortView,
  IGroupingView {
  paginator: PaginatorState;
  sorting: SortState;
  grouping: GroupingState;
  isLoading: boolean;
  filterGroup: FormGroup;
  searchGroup: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    public service: PacientesService
  ) { }

  // angular lifecircle hooks
  ngOnInit(): void {    
    this.searchForm();    
    this.service.setDefaults();
    this.service.fetch();
    this.grouping = this.service.grouping;
    this.paginator = this.service.paginator;
    this.sorting = this.service.sorting;
    const sb = this.service.isLoading$.subscribe(
      (res) => (this.isLoading = res)
    );
    this.subscriptions.push(sb);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }


  // search
  searchForm() {
    this.searchGroup = this.fb.group({
      searchTerm: [""],
    });
    const searchEvent = this.searchGroup.controls.searchTerm.valueChanges
      .pipe(
        map(value => value.trim()),
        debounceTime(400),
        distinctUntilChanged(),
      )
      .subscribe((val) => this.service.patchState({ filter: { search: val } })); 
    this.subscriptions.push(searchEvent);
  }

  // sorting
  sort(column: string) {
    const sorting = this.sorting;
    const isActiveColumn = sorting.column === column;
    if (!isActiveColumn) {
      sorting.column = column;
      sorting.direction = 'asc';
    } else {
      sorting.direction = sorting.direction === 'asc' ? 'desc' : 'asc';
    }
    this.service.patchState({ sorting });
  }

  // pagination
  paginate(paginator: PaginatorState) {
    this.service.patchState({ paginator });
  }

  // // form actions
  create() {
    this.edit(undefined);
  }

  edit(id: number) {
    const modalRef = this.modalService.open(FormPacienteModalComponent, { size: 'xl' });
    modalRef.componentInstance.id = id;
    modalRef.result.then(() =>
      this.service.fetch(),
      () => { }
    );
  }

  delete(id: number) {
    const modalRef = this.modalService.open(DeletePacienteModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then(() => this.service.fetch(), () => { });
  }

  generateRelatorio(id: number) {
    const modalRef = this.modalService.open(
      RelatorioPacienteModalComponent, 
      { size: 'xl', scrollable: true, windowClass: 'modal-monitoramento' }
    );
    modalRef.componentInstance.id = id;
    modalRef.result.then(() => this.service.fetch(), () => { });
  }

}