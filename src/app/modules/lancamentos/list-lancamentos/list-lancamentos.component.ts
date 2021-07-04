import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { GroupingState, ICreateAction, IEditAction, IFilterView, IGroupingView, ISearchView, ISortView, PaginatorState, SortState } from "../../../_metronic/shared/crud-table";
import { GruposService } from "src/app/services/grupos.service";
import { LancamentosService } from "src/app/services/lancamentos.service";

@Component({
  selector: "app-list-lancamentos",
  templateUrl: "./list-lancamentos.component.html",
  styleUrls: ["./list-lancamentos.component.scss"],
})
export class ListLancamentosComponent
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

  @Input() paciente: number;
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
    public service: LancamentosService,
    public gruposService: GruposService
  ) {}

  // angular lifecircle hooks
  ngOnInit(): void {

    // this.searchForm();
    this.service.fetch();
    this.grouping = this.service.grouping;
    this.paginator = this.service.paginator;
    this.sorting = this.service.sorting;
    const sb = this.service.isLoading$.subscribe(
      (res) => (this.isLoading = res)
    );
    this.subscriptions.push(sb);

    this.gruposService.fetch();
    this.filterForm();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  // filtration
  filterForm() {
    this.filterGroup = this.fb.group({
      status: [""],
      type: ["1"]
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
    this.edit(undefined);
  }

  edit(id: number) {
    // const modalRef = this.modalService.open(FormContratoModalComponent, {
    //   size: "xl",
    // });
    // modalRef.componentInstance.id = id;
    // modalRef.result.then(
    //   () => this.service.fetch(),
    //   () => {}
    // );
  }

  editRegister(id: number, register) {
    // const modalRef = this.modalService.open(FormContratoModalComponent, {
    //   size: "xl",
    // });
    // modalRef.componentInstance.id = id;
    // modalRef.componentInstance.register = register;
    // modalRef.result.then(
    //   () => this.service.fetch(),
    //   () => {}
  
    // );
  }

  delete(id: number) {
    // const modalRef = this.modalService.open(DeleteContratoModalComponent);
    // modalRef.componentInstance.id = id;
    // modalRef.result.then(
    //   () => this.service.fetch(),
    //   () => {}
    // );
  }

  cancelContrato(id: number) {
    // const modalRef = this.modalService.open(CancelContratoModalComponent);
    // modalRef.componentInstance.id = id;
    // modalRef.result.then(
    //   () => this.service.fetch(),
    //   () => {}
    // );
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

}
