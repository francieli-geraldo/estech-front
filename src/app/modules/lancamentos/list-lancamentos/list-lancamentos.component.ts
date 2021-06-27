import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgbDateAdapter, NgbDateParserFormatter, NgbModal, NgbTypeahead } from "@ng-bootstrap/ng-bootstrap";
import { merge, Observable, Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, map } from "rxjs/operators";
import { GruposService } from "src/app/services/grupos.service";
import { LancamentoBase, LancamentosService } from "src/app/services/lancamentos.service";
import { CustomAdapter, CustomDateParserFormatter } from "src/app/_metronic/core";
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
} from "../../../_metronic/shared/crud-table";

const states = [
  {id: 1, description: 'Maria  Julia da Silva - +55 (41) 9 84568688'},
  {id: 2, description: 'José - +55 (41) 9 84568688'},
  {id: 3, description: 'Carlos - +55 (41) 9 84568688'}
];

@Component({
  selector: 'app-list-lancamentos',
  templateUrl: './list-lancamentos.component.html',
  styleUrls: ['./list-lancamentos.component.scss'],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class ListLancamentosComponent implements OnInit, OnDestroy {

  paginator: PaginatorState;
  sorting: SortState;
  grouping: GroupingState;
  isLoading: boolean;
  previousLancamentos: any = {};
  maxDate;
  
  private subscriptions: Subscription[] = [];
 
  programas: Array<any>;

  model: any;
  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  hasRegisters: Boolean = false;
  endDate;
  modelteste;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    public service: LancamentosService,
    public gruposService: GruposService
  ) {}

  // angular lifecircle hooks
  ngOnInit(): void {
    this.modelteste = this.todayDatepicker(new Date())
    this.maxDate = this.minDatepicker(new Date());
    this.gruposService.fetch();
    this.getLancamentos();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  toDate(dob) {
    if (dob) {
      const [year, month, day] = dob.split('-');
      const obj = { year: parseInt(year), month: parseInt(month), day: parseInt(day.split(' ')[0].trim()) };
      // this.endDate = obj;
    }
  }

  getLancamentos() {    
    // this.filterForm();
    // this.searchForm();
    this.service.fetch();
    this.grouping = this.service.grouping;
    this.paginator = this.service.paginator;
    this.sorting = this.service.sorting;
    const sb = this.service.isLoading$.subscribe(
      (res) => (this.isLoading = res)
    );
    this.subscriptions.push(sb);
  }

  // filtration
  filterForm() {
    let today = new Date();
    // this.filterGroup = this.fb.group({
    //   dateFilter:  { year: today.getFullYear(), month: today.getMonth()+ 1, day: 1  },
    //   grupo: [""],
    // });
    
    // this.subscriptions.push(
    //   this.filterGroup.controls.grupo.valueChanges.subscribe(() => this.filter())
    // );
    
    // this.subscriptions.push(
    //   this.filterGroup.controls.dateFilter.valueChanges.subscribe(() => this.filter())
    // );
    
  }

  filter() {
    this.hasRegisters = true;
    const filter = {};
    // const paciente = this.filterGroup.get("paciente").value;
    // if (paciente) {
    //   filter["paciente"] = paciente;
    // }

    // const programa = this.filterGroup.get("programa").value;
    // if (programa) {
    //   filter["programa"] = programa;
    // }
    this.service.patchState({ filter });
  }

  // search
  searchForm() {
    // this.searchGroup = this.fb.group({
    //   searchTerm: [""],
    // });
    // const searchEvent = this.searchGroup.controls.searchTerm.valueChanges
    //   .pipe(
    //     debounceTime(150),
    //     distinctUntilChanged()
    //   )
      // .subscribe((val) => this.search(val));
    // this.subscriptions.push(searchEvent);
  }

  // search(searchTerm: string) {
  //   this.service.patchState({ searchTerm });
  // }

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

  // form actions
  create() {
    this.edit(undefined);
  }

  edit(id) {

  }

  selectedItem(item){
    this.programas = [
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

  search = (text$: Observable<string>) => {
    
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;
    
    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? states : states.filter(v => v.description.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  minDatepicker(day: Date) {
    return {
      year: day.getFullYear(),
      month: Number(String(day.getMonth() + 1).padStart(2, "0")),
      day: Number(String(day.getDate()).padStart(2, "0"))
    };
  }

  todayDatepicker(day: Date) {
    return `${day.getFullYear()}-${Number(String(day.getMonth() + 1).padStart(2, "0"))}-${Number(String(day.getDate()).padStart(2, "0"))}}`;
  }

  formatter = (x: {description: string}) => x.description;
}
