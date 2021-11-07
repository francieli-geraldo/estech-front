import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  NgbActiveModal,
  NgbDateAdapter,
  NgbDateParserFormatter
} from "@ng-bootstrap/ng-bootstrap";
import { Observable, of, Subscription } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from "rxjs/operators";
import { Contrato } from "src/app/models/contrato.model";
import { Grupo } from "src/app/models/grupo.model";
import { Programa } from "src/app/models/programa.model";
import { ContratosService } from "src/app/services/contratos.service";
import { GruposService } from "src/app/services/grupos.service";
import { PacientesService } from "src/app/services/pacientes.service";
import { ProgramasService } from "src/app/services/programas.service";
import {
  CustomAdapter,
  CustomDateParserFormatter
} from "src/app/_metronic/core";
import { GroupingState, PaginatorState } from "src/app/_metronic/shared/crud-table";

import { Notify } from '../../../../../assets/js/layout/extended/messages/notify';

const EMPTY_CONTRATO: any = {  
  id: undefined,
  programId: 0,
  groupId: 0,
  patientId: 0, 
  startingWeight: 0,
  goal: 0,
  hiringDate: "",
  startDate: "",
  notes: "",
  status: "ACTIVE",
};

@Component({
  selector: "app-form-contrato-modal",
  templateUrl: "./form-contrato-modal.component.html",
  styleUrls: ["./form-contrato-modal.component.scss"],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class FormContratoModalComponent implements OnInit {
  
  @Input() id: number;
  @Input() register: Contrato;
  
  private subscriptions: Subscription[] = [];
  
  formContrato: FormGroup;
  searchGroup: FormGroup;
  
  minDate;
  minDateConclusao;
  maxDateStart;
  isLoading$;
  
  isLoading: boolean;
  paginatorPaciente: PaginatorState;
  groupingPaciente: GroupingState;

  pacienteIdContrato;
  
  listProgramas$: Observable<Programa[]>;
  listGrupos$: Observable<Grupo[]>;

  constructor(
    public pacienteService: PacientesService,
    private registersService: ContratosService,
    public programasService: ProgramasService,
    public gruposService: GruposService,
    private fb: FormBuilder,
    public modal: NgbActiveModal
  ) {}
  
  formatMatches = (value: any) => value.name || '';

  ngOnInit(): void {
    this.pacienteIdContrato = 0;

    this.listProgramas$ = this.programasService.findParams({ 
      params: {
        page: '0',
        size: '9999',
      }
    });

    this.listGrupos$ = this.gruposService.findParams({ 
      params: {
        page: '0',
        size: '9999',
      }
    });
    
    
    this.minDate = this.minDatepicker(new Date());
    this.isLoading$ = this.registersService.isLoading$;
    this.loadRegister();
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

  loadRegister() {
    if (!this.id) { 
      this.register = Object.assign({}, EMPTY_CONTRATO); 
    }     
    this.loadForm();
  }

  loadForm() {    

    this.pacienteIdContrato =  this.register?.program?.id || this.register.programId;
    
    this.formContrato = this.fb.group({      
      patientId: [
        {
          value: this.register?.patient?.id || this.register.patientId,
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator]),
      ],
      programId: [
        {
          value: this.register?.program?.id || this.register.programId,
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator]),
      ],
      groupId: [
        {
          value: this.register?.group?.id || this.register.groupId, 
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator])
      ],
      status: [
        {
          value: this.register.status, 
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator])
      ],
      startingWeight: [
        {
          value: this.setValueAroud(this.register.startingWeight),
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator]),
      ],
      goal: [
        {
          value: this.setValueAroud(this.register.goal), 
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator])
      ], 
      hiringDate: [
        {
          value: this.register.hiringDate,
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator]),
      ],     
      startDate: [
        {
          value: this.register.startDate,
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator]),
      ],           
      dateConclusion: [
        {
          value: this.register.dateConclusion,
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator]),
      ],           
      cancellationDate: [
        {
          value: this.register.cancellationDate,
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator]),
      ],           
      reasonCancellation: [
        {
          value: this.register.reasonCancellation,
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator]),
      ],           
      notes: [
        {
          value: this.register.notes,
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator]),
      ],
      objetivo: [
        {
          value: ((this.register.goal || 0) - (this.register?.startingWeight || 0)).toFixed(3),
          disabled: this.register.status != "ACTIVE"
        },
        Validators.compose([Validators.nullValidator]),
      ]
    });
  }

  setValueAroud(value) {
    return (value !== '' && !!value) ? parseFloat(value).toFixed(3) : 0.000;
  }

  save() {
    this.prepareRegister();
    if (this.id) {
      this.edit();
    } else {
      this.create();
    }
  }

  edit() {
    const sbUpdate = this.registersService
      .update(this.register)
      .pipe(
        tap((res) => {
          if(!!!res){
            new Notify({ message: 'Contrato atualizado com sucesso!', type: 'success' }).show();
            this.modal.close();
          } 
        }),
        catchError((errorMessage) => {
          return of(this.register);
        })
      )
      .subscribe((res) => (this.register = res));
    console.log(sbUpdate);

    this.subscriptions.push(sbUpdate);
  }

  create() {
    const sbCreate = this.registersService
      .create(this.register)
      .pipe(
        tap((res) => {          
          if(!!!res){
            new Notify({ message: 'Contrato criado com sucesso!', type: 'success' }).show();
            this.modal.close();
          }
        }),
        catchError((errorMessage) => {
          return of(this.register);
        })
      )
      .subscribe((res: Contrato) => (this.register = res));
    this.subscriptions.push(sbCreate);
  }

  private prepareRegister() {
    const formData = this.formContrato.value;    
    this.register.patientId = Number(this.pacienteIdContrato?.id || this.pacienteIdContrato);
    this.register.programId = Number(formData.programId);
    this.register.groupId = Number(formData.groupId);
    this.register.startDate = formData.startDate;
    this.register.startingWeight = formData.startingWeight;
    this.register.goal = formData.goal;    
    this.register.hiringDate = formData.hiringDate;
    this.register.notes = formData.notes;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.formContrato.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formContrato.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.formContrato.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.formContrato.controls[controlName];
    return control.dirty || control.touched;
  }

  sumObjetivo() {
    const formData = this.formContrato.value;
    return ((formData?.goal || 0) - (formData?.startingWeight || 0)).toFixed(3)    
  }

  isDisabled() {    
    const formData = this.formContrato.value;
    if(!!formData.startDate){
      let date: any = new Date(formData.startDate);
      let hiringDate: any = new Date(formData.hiringDate);
      this.minDateConclusao = this.minDatepicker(date.addDays(1));
      this.maxDateStart = this.minDatepicker(hiringDate);
      return false;
    }
    return true;
  }

  minDatepicker(day: Date) {
    return {
      year: day.getFullYear(),
      month: Number(String(day.getMonth() + 1).padStart(2, "0")),
      day: Number(String(day.getDate()).padStart(2, "0"))
    };
  }

  paginate(paginator: PaginatorState) {
    this.pacienteService.patchState({ paginator });
  }

  changeWeight(event){ 
    if(event.target.value !== ''){
      event.target.value = parseFloat(event.target.value).toFixed(3);
    }
  }

}
