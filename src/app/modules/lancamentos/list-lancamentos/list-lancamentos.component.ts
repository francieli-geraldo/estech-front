import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgbDateAdapter, NgbDateParserFormatter, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { GroupingState, ICreateAction, IEditAction, IFilterView, IGroupingView, ISearchView, ISortView, PaginatorState, SortState } from "../../../_metronic/shared/crud-table";
import { GruposService } from "src/app/services/grupos.service";
import { LancamentosService } from "src/app/services/lancamentos.service";
import { CustomAdapter, CustomDateParserFormatter } from "src/app/_metronic/core";
import { PacientesService } from "src/app/services/pacientes.service";

@Component({
  selector: "app-list-lancamentos",
  templateUrl: "./list-lancamentos.component.html",
  styleUrls: ["./list-lancamentos.component.scss"],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ]
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
  previousLancamentos: any = {};
  maxDate = this.formatDatepicker(new Date());

  constructor(  
    private fb: FormBuilder,
    private modalService: NgbModal,
    public service: LancamentosService,
    public gruposService: GruposService,
    public pacientesService: PacientesService,
  ) {}

  // angular lifecircle hooks
  ngOnInit(): void {
    
    this.gruposService.fetch();
    this.pacientesService.fetch();
    this.filterForm();

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
  async filterForm() {
    this.filterGroup = this.fb.group({
      dateFilter: [this.todayDatepicker(new Date())],
      grupoId: ["1"]
    });
    this.subscriptions.push(
      this.filterGroup.controls.dateFilter.valueChanges.subscribe(() =>
        this.filter()
      )
    );
    this.subscriptions.push(
      this.filterGroup.controls.grupoId.valueChanges.subscribe(() => this.filter())
    );
  }

  filter() {
    const filter = {};
    const dateFilter = this.filterGroup.get("dateFilter").value;
    if (dateFilter) {
      filter["dateFilter"] = dateFilter;
    }

    const grupoId = this.filterGroup.get("grupoId").value;
    if (grupoId) {
      filter["grupoId"] = grupoId;
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
  // paginate(paginator: PaginatorState) {
  //   this.service.patchState({ paginator });
  // }

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

  confirmEditCreate(register) {
    register.editable = false;    
    if(register.id){
      // this.service.edit(register)
    }else{
      // this.service.create(register)
    }
  }

  startEdit(register) {
    this.previousLancamentos[register.date] =  Object.assign({}, register);
    register.editable = true;
  }

  cancelEditCreate(register, row) {
    register.editable = false;
    Object.keys(register).forEach(item => {
      register[item] = this.previousLancamentos[register.date][item]
    });    
  }

  changeValueRegister(register, field) {
    register[field] = !register[field];
  }

  formatDatepicker(day: Date) {
    return {
      year: day.getFullYear(),
      month: Number(String(day.getMonth() + 1).padStart(2, "0")),
      day: Number(String(day.getDate()).padStart(2, "0"))
    };
  }

  todayDatepicker(day: Date) {
    return `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, "0")}-26`;
  }
}
