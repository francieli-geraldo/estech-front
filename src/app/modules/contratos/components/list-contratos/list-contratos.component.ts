import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { GroupingState, ICreateAction, IEditAction, IFilterView, IGroupingView, ISortView, PaginatorState, SortState } from "../../../../_metronic/shared/crud-table";
import { ContratosService } from "../../../../services/contratos.service";
import { CancelContratoModalComponent } from "../cancel-contrato-modal/cancel-contrato-modal.component";
import { ConcluedContratoModalComponent } from "../conclued-contrato-modal/conclued-contrato-modal.component";
import { DeleteContratoModalComponent } from "../delete-contrato-modal/delete-contrato-modal.component";
import { FormContratoModalComponent } from "../form-contrato-modal/form-contrato-modal.component";
import { ProgramasService } from "src/app/services/programas.service";
import { PacientesService } from "src/app/services/pacientes.service";
import { ReactivateContratoModalComponent } from "../reactivate-contrato-modal/reactivate-contrato-modal.component";
import { Programa } from "src/app/models/programa.model";
import { MonitorFinalProgramaComponent } from "../monitor-final-programa/monitor-final-programa.component";

@Component({
  selector: "app-list-contratos",
  templateUrl: "./list-contratos.component.html",
  styleUrls: ["./list-contratos.component.scss"],
})
export class ListContratosComponent
  implements
    OnInit,
    OnDestroy,
    ICreateAction,
    IEditAction,
    ISortView,
    IFilterView,
    IGroupingView,
    IFilterView {

  @Input() paciente: number;
  paginator: PaginatorState;
  sorting: SortState;
  grouping: GroupingState;
  isLoading: boolean;
  filterGroup: FormGroup;
  searchGroup: FormGroup;
  private subscriptions: Subscription[] = [];
  listProgramas$: Observable<Programa[]>;

  constructor(  
    private fb: FormBuilder,
    private modalService: NgbModal,
    public service: ContratosService,
    public programasService: ProgramasService,
    public pacienteService: PacientesService
  ) {}

  ngOnInit(): void {
    this.service.setDefaults();
    this.service.patchState({ filter: { status: 'ACTIVE' } })
    this.grouping = this.service.grouping;
    this.paginator = this.service.paginator;
    this.sorting = this.service.sorting;
    const sb = this.service.isLoading$.subscribe(
      (res) => (this.isLoading = res)
    );
    this.subscriptions.push(sb);
    
    this.listProgramas$ = this.programasService.findParams({ 
      params: {
        page: '0',
        size: '9999',
      }
    });

    this.filterForm();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  // filtration
  filterForm() {
    this.filterGroup = this.fb.group({
      status: ["ACTIVE"],
      programId: [""],
      patientId: [""]
    });
    this.subscriptions.push(
      this.filterGroup.controls.status.valueChanges.subscribe(() =>
        this.filter()
      )
    );
    this.subscriptions.push(
      this.filterGroup.controls.programId.valueChanges.subscribe(() => 
        this.filter()
      )
    );
    
    this.subscriptions.push(
      this.filterGroup.controls.patientId.valueChanges.subscribe(() => {
        if (typeof this.filterGroup.get('patientId').value === 'object') {
          this.filter();
        }else{
          if (this.filterGroup.get('patientId').value === '') {
            this.filter();
          }
        }
      })
    );
  }

  filter() {
    const filter = {};
    const status = this.filterGroup.get("status").value;
    filter["status"] = status;
    
    const programId = this.filterGroup.get("programId").value;
    filter["programId"] = programId;
    
    const patientId = this.filterGroup.get("patientId").value;
    if (typeof this.filterGroup.get("patientId").value === 'object') {
      filter["patientId"] = patientId.id;
    }else{
      filter["patientId"] = undefined;
    }
    
    this.service.patchState({ filter });
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

  // form actions
  create() {
    this.edit(undefined);
  }

  edit(id: number) {
    const modalRef = this.modalService.open(FormContratoModalComponent, {
      size: "xl",
    });
    modalRef.componentInstance.id = id;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  editRegister(id: number, register) {
    const modalRef = this.modalService.open(FormContratoModalComponent, {
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
    const modalRef = this.modalService.open(DeleteContratoModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  cancelContrato(register) {
    const modalRef = this.modalService.open(CancelContratoModalComponent);
    modalRef.componentInstance.id = register.id;
    modalRef.componentInstance.nomeCliente = `${register.patient.name} - ${register.patient.phone}`;
    modalRef.componentInstance.register = register;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }
  
  reactivateContrato(register) {
    const modalRef = this.modalService.open(ReactivateContratoModalComponent);
    modalRef.componentInstance.id = register.id;
    modalRef.componentInstance.nomeCliente = `${register.patient.name} - ${register.patient.phone}`;
    modalRef.componentInstance.register = register;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  concluedContrato(register) {
    const modalRef = this.modalService.open(ConcluedContratoModalComponent);
    modalRef.componentInstance.id = register.id;
    modalRef.componentInstance.nomeCliente = `${register.patient.name} - ${register.patient.phone}`;
    modalRef.componentInstance.register = register;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  deleteSelected() {
    const modalRef = this.modalService.open(DeleteContratoModalComponent);
    modalRef.componentInstance.ids = this.grouping.getSelectedRows();
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  updateStatusForSelected() {
    const modalRef = this.modalService.open(DeleteContratoModalComponent);
    modalRef.componentInstance.ids = this.grouping.getSelectedRows();
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  getProgramMonitoring(register) {
    const modalRef = this.modalService.open(MonitorFinalProgramaComponent, {
      size: "xl",
    });
    modalRef.componentInstance.agreementId = register.id;
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  fetchSelected() {
    const modalRef = this.modalService.open(DeleteContratoModalComponent);
    modalRef.componentInstance.ids = this.grouping.getSelectedRows();
    modalRef.result.then(
      () => this.service.fetch(),
      () => {}
    );
  }

  resultFormatBandListValue(value: any) {            
    return `${value?.name} - ${value?.phone || '*'}` ;
  } 

  inputFormatBandListValue(value: any)   {
    if(value){
      return `${value?.name} - ${value?.phone || '*'}`;
    }else{
      return ''
    }
  }

  search = (text$: Observable<string>) => {
    return text$.pipe(      
        debounceTime(200), 
        distinctUntilChanged(),        
        switchMap(val => this.pacienteService.findByDescriptionPaciente(val))          
    );                 
  }

  isOpened(status: string) {
    return ['ACTIVE', 'OVERDUE', 'OVERDUE_LESS_7', 'OVERDUE_LESS_15', 'OVERDUE_LESS_30'].includes(status);
  }

  statusInAlert(status: string) {
    return ['CANCELED', 'OVERDUE', 'OVERDUE_LESS_7', 'OVERDUE_LESS_15', 'OVERDUE_LESS_30'].includes(status);
  }

}
