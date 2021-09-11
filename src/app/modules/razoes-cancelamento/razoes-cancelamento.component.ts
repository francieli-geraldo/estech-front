import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { RazaoCancelamento } from 'src/app/models/razao-cancelamento.model';
import { RazoesCancelamentoService } from 'src/app/services/razoes-cancelamento.service';
import { GroupingState, ICreateAction, IFilterView, IGroupingView, ISearchView, ISortView, PaginatorState, SortState } from 'src/app/_metronic/shared/crud-table';
import { DeleteRazaoCancelamentoModalComponent } from './components/delete-razao-cancelamento-modal/delete-razao-cancelamento-modal.component';
import { FormRazaoCancelamentoModalComponent } from './components/form-razao-cancelamento-modal/form-razao-cancelamento-modal.component';

@Component({
  selector: 'app-razoes-cancelamento',
  templateUrl: './razoes-cancelamento.component.html',
  styleUrls: ['./razoes-cancelamento.component.scss']
})
export class RazoesCancelamentoComponent 
implements
OnInit,
OnDestroy,
ICreateAction,
ISortView,
IFilterView,
IGroupingView,
ISearchView {
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
    public service: RazoesCancelamentoService
    ) { }

 
  // angular lifecircle hooks
  ngOnInit(): void {
    this.filterForm();
    this.searchForm();
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

  // filtration
  filterForm() {
    this.filterGroup = this.fb.group({
      status: [""],
      type: [""],
      searchTerm: [""],
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
    const status = this.filterGroup.get("status").value;
    if (status) {
      filter["status"] = status;
    }

    const type = this.filterGroup.get("type").value;
    if (type) {
      filter["type"] = type;
    }
    this.service.patchState({ filter });
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
      .subscribe((val) => this.service.filterByDescription(val));
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
      sorting.direction = "asc";
    } else {
      sorting.direction = sorting.direction === "asc" ? "desc" : "asc";
    }
    this.service.patchState({ sorting });
  }

  // pagination
  paginate(paginator: PaginatorState) {
    this.service.patchState({ paginator });
  }

  // // form actions
  create() {
    this.editRegister(undefined, undefined);
  }

  edit(id: number) {
    const modalRef = this.modalService.open(FormRazaoCancelamentoModalComponent, {
      size: "xl",
    });
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.register = id;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  editRegister(id: number, register: RazaoCancelamento) {
    const modalRef = this.modalService.open(FormRazaoCancelamentoModalComponent, {
      size: "xl",
    });
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.register = register;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  delete(id: number) {
    const modalRef = this.modalService.open(DeleteRazaoCancelamentoModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }


  deleteSelected() {
    // const modalRef = this.modalService.open(DeleteContratoModalComponent);
    // modalRef.componentInstance.ids = this.grouping.getSelectedRows();
    // modalRef.result.then(
    //   () => this.service.fetch(),
    //   () => {}
    // );
  }

  updateStatusForSelected() {
    // const modalRef = this.modalService.open(DeleteContratoModalComponent);
    // modalRef.componentInstance.ids = this.grouping.getSelectedRows();
    // modalRef.result.then(
    //   () => this.service.fetch(),
    //   () => {}
    // );
  }

  fetchSelected() {
    // const modalRef = this.modalService.open(DeleteContratoModalComponent);
    // modalRef.componentInstance.ids = this.grouping.getSelectedRows();
    // modalRef.result.then(
    //   () => this.service.fetch(),
    //   () => {}
    // );
  }

  getProgramas(){
    return [
      {id: 1, description: "Emagrece você"},
      {id: 2, description: "Engorda você"},
      {id: 3, description: "Casa você"},
      {id: 4, description: "Separa você"},
    ]
  }

}
