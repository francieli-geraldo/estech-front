import { Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgbDateAdapter, NgbDateParserFormatter, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable, Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { GroupingState, ICreateAction, IEditAction, IFilterView, IGroupingView, ISearchView, ISortView, PaginatorState, SortState } from "../../../_metronic/shared/crud-table";
import { GruposService } from "src/app/services/grupos.service";
import { LancamentosService } from "src/app/services/lancamentos.service";
import { CustomAdapter, CustomDateParserFormatter } from "src/app/_metronic/core";
import { PacientesService } from "src/app/services/pacientes.service";
import { Lancamento } from "src/app/models/Lancamento.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-list-lancamentos",
  templateUrl: "./list-lancamentos.component.html",
  styleUrls: ["./list-lancamentos.component.scss"],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ]
})
export class ListLancamentosComponent  implements OnInit, OnDestroy {

  @Input() paciente: number;
  paginator: PaginatorState;
  sorting: SortState;
  grouping: GroupingState;
  isLoading: boolean;
  filterGroup: FormGroup;
  searchGroup: FormGroup;
  private subscriptions: Subscription[] = [];
  previousLancamentos: any = {};
  maxDate = new Date();

  listLancamentos$: Observable<Lancamento[]>;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private modalService: NgbModal,
    public service: LancamentosService,
    public gruposService: GruposService,
    public pacientesService: PacientesService,
  ) { }

  // angular lifecircle hooks
  ngOnInit(): void {
    this.gruposService.fetch();
    this.pacientesService.fetch();
    this.filterForm();
    this.filter();
  }

  changeWeight(event){ 
    if(event.target.value !== ''){
      event.target.value = parseFloat(event.target.value).toFixed(3);
    }
  }

  showAccumulatedEvolution(currentWeight, register) {
    const balanca = register.balance;
    const novo = ((balanca?.previousWeight || 0 ) + (balanca?.evolution || 0));    
    const newInput = balanca?.currentWeight || balanca?.previousWeight || 0;    
    const calc = novo - newInput;
    const calcAccumulatedEvolution: any = (balanca?.accumulatedEvolution || 0) - calc;
    return parseFloat( calcAccumulatedEvolution ).toFixed(3);      
  }
  
  setValueAroud(value) {
    return (value !== '' && !!value) ? parseFloat(value).toFixed(3) : 0.000;
  }

  showWeight(value){
    return (value !== '' && !!value) ? parseFloat(value).toFixed(3).replace('.',',') : '0,000';
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  filterForm() {
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
    const params = {};
    const dateFilter = this.filterGroup.get("dateFilter").value;
    if (dateFilter) {
      params["date"] = dateFilter;
    }

    const grupoId = this.filterGroup.get("grupoId").value;
    if (grupoId) {
      params["groupId"] = grupoId;
    }

    this.listLancamentos$ = this.service.findParams({ params });
  }

  confirmEditCreate(register) {
    // 'agreementId': register.agreementId,
    // 'patientId': register.patientId,
    // "notes": "Informou café da manhã, e agora informou o lanche da manhã, porém estava muito calórico"
    register.editable = false;    
    let registro = {
      "date": register.date,
      "balance": {
        "informed": register.balance.informed,
        "currentWeight": parseFloat(register.balance.currentWeight).toFixed(3)
      },
      "breakfast": register.breakfast,
      "morningSnack": register.morningSnack,
      "lunch": register.lunch,
      "afternoonSnack": register.afternoonSnack, 
      "dinner": register.dinner,
      "hiit": register.hiit    
    };
    
    this.service.editLancamento({
      register: registro,
      agreementId: register.agreementId,
      patientId: register.patientId
    })
    
  }

  startEdit(register) {
    this.previousLancamentos[register.date] = Object.assign({}, register);

    register.balance.currentWeight = this.setValueAroud(register.balance.currentWeight)
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

  todayDatepicker(day: Date) {
    let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
    return `${year}-${("00" + month).slice(-2)}-${("00" + date).slice(-2)}`;
  }
}
