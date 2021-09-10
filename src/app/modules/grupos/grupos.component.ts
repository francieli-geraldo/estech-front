import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Grupo } from 'src/app/models/grupo.model';
import { GruposService } from 'src/app/services/grupos.service';
import { GroupingState, ICreateAction, IFilterView, IGroupingView, ISearchView, ISortView, PaginatorState, SortState } from 'src/app/_metronic/shared/crud-table';
import { DeleteGruposModalComponent } from './components/delete-grupos-modal/delete-grupos-modal.component';
import { FormGruposModalComponent } from './components/form-grupos-modal/form-grupos-modal.component';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent 
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
    public service: GruposService
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
    // this.service.patchState({ filter });
  }

  // search
  searchForm() {
    this.searchGroup = this.fb.group({
      searchTerm: [""],
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
    // this.service.patchState({ searchTerm });
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
    let sort = `${sorting.column},${sorting.direction}`
    this.service.patchState({ sort });
  }

  // pagination
  paginate(paginator: PaginatorState) {
    console.log(paginator);
    

    // this.service.patchState({ paginator });
  }

  // // form actions
  create() {
    this.editRegister(undefined, undefined);
  }

  edit(id: number) {
    const modalRef = this.modalService.open(FormGruposModalComponent, {
      size: "xl",
    });
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.register = id;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  editRegister(id: number, register: Grupo) {
    const modalRef = this.modalService.open(FormGruposModalComponent, {
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
    const modalRef = this.modalService.open(DeleteGruposModalComponent);
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
