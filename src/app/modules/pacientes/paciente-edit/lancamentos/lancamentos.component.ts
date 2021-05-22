import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { LancamentoBase, LancamentosService } from "src/app/services/lancamentos.service";
import {
  GroupingState,
  ICreateAction,
  IEditAction,
  IFilterView,
  IGroupingView,
  ISearchView,
  ISortView,
  PaginatorState,
  SortState,
} from "../../../../_metronic/shared/crud-table";
// import { CancelContratoModalComponent } from "./components/cancel-contrato-modal/cancel-contrato-modal.component";
// import { DeleteContratoModalComponent } from "./components/delete-contrato-modal/delete-contrato-modal.component";
// import { FormContratoModalComponent } from "./components/form-contrato-modal/form-contrato-modal.component";


@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent
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
  previousLancamentos: any = {};
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    public service: LancamentosService  ) {}

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


  view(id: number) {

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

  getProgramas(){
    return [
      {id: 1, description: "Emagrece você"},
      {id: 2, description: "Engorda você"},
      {id: 3, description: "Casa você"},
      {id: 4, description: "Separa você"},
    ]
  }

 
  
  changeValueRegister(register, field) {
    register[field] = !register[field];
  }
  
  confirmEditCreate(register) {
    register.editable = false;    
    this.previousLancamentos[register.data] = Object.assign({}, register);
    if(register.id){
      // this.service.edit(register)
    }else{
      // this.service.create(register)
    }
  }

  startEdit(register) {
    this.previousLancamentos[register.data] = Object.assign({}, register);
    register.editable = true;
  }

  cancelEditCreate(register, row) {
    register.editable = false;
    Object.keys(register).forEach(item => {
      register[item] = this.previousLancamentos[register.data][item]
    });    
  }


}
