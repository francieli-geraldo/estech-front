
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
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
  IFilterView,
  IGroupingView,
  ISearchView,
  IFilterView {
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
    this.filterForm();
    this.searchForm();
    this.service.fetch();
    this.grouping = this.service.grouping;
    this.paginator = this.service.paginator;
    this.sorting = this.service.sorting;
    const sb = this.service.isLoading$.subscribe(res => this.isLoading = res);
    this.subscriptions.push(sb);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  // filtration
  filterForm() {
    this.filterGroup = this.fb.group({
      status: [''],
      type: [''],
      searchTerm: [''],
    });
    this.subscriptions.push(
      this.filterGroup.controls.status.valueChanges.subscribe(() =>
        this.filter()
      )
    );
    this.subscriptions.push(
      this.filterGroup.controls.type.valueChanges.subscribe(() => this.filter())
    );
  }

  filter() {
    const filter = {};
    const status = this.filterGroup.get('status').value;
    if (status) {
      filter['status'] = status;
    }

    const type = this.filterGroup.get('type').value;
    if (type) {
      filter['type'] = type;
    }
    this.service.patchState({ filter });
  }

  // search
  searchForm() {
    this.searchGroup = this.fb.group({
      searchTerm: [''],
    });
    const searchEvent = this.searchGroup.controls.searchTerm.valueChanges
      .pipe(
        /*
      The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator,
      we are limiting the amount of server requests emitted to a maximum of one every 150ms
      */
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe((val) => this.search(val));
    this.subscriptions.push(searchEvent);
  }

  search(searchTerm: string) {
    this.service.patchState({ searchTerm });
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
      { size: 'xl', scrollable: true  }
    );
    modalRef.componentInstance.id = id;
    modalRef.result.then(() => this.service.fetch(), () => { });
  }

}