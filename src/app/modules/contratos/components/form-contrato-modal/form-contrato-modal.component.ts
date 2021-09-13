import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  NgbActiveModal,
  NgbDateAdapter,
  NgbDateParserFormatter,
} from "@ng-bootstrap/ng-bootstrap";
import { defineLocale, locale } from "moment";
import { Observable, of, Subscription } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, first, map, switchMap, tap } from "rxjs/operators";
import { Contrato } from "src/app/models/contrato.model";
import { Paciente } from "src/app/models/paciente.model";
import { ContratosService } from "src/app/services/contratos.service";
import { GruposService } from "src/app/services/grupos.service";
import { PacientesService } from "src/app/services/pacientes.service";
import { ProgramasService } from "src/app/services/programas.service";
import {
  CustomAdapter,
  CustomDateParserFormatter,
} from "src/app/_metronic/core";
import { GroupingState, PaginatorState } from "src/app/_metronic/shared/crud-table";

const EMPTY_CONTRATO: any = {  
  id: undefined,
  programId: 0,
  groupId: 0,
  pacienteId: 0, 
  startingWeight: 0,
  goal: 0,
  hiringDate: "",
  startDate: "",
  notes: ""
};

@Component({
  selector: "app-form-contrato-modal",
  templateUrl: "./form-contrato-modal.component.html",
  styleUrls: ["./form-contrato-modal.component.scss"],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class FormContratoModalComponent implements OnInit {
  
  @Input() id: number;
  @Input() register: Contrato;
  
  private subscriptions: Subscription[] = [];

  minDate;
  minDateConclusao;
  
  isLoading$;
  
  formContrato: FormGroup;
  searchGroup: FormGroup;
  
  isLoading: boolean;
  paginatorPaciente: PaginatorState;
  groupingPaciente: GroupingState;

  pacienteIdContrato;
  
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
    this.programasService.fetch();
    this.gruposService.fetch();
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
      this.register = EMPTY_CONTRATO 
    }     
    this.loadForm();
  }

  loadForm() {    
    this.formContrato = this.fb.group({      
      patientId: [
        this.register.patientId,
        Validators.compose([Validators.nullValidator]),
      ],
      programId: [
        this.register.programId,
        Validators.compose([Validators.nullValidator]),
      ],
      groupId: [this.register.groupId, Validators.compose([Validators.nullValidator])],
      status: [this.register.status, Validators.compose([Validators.nullValidator])],
      startingWeight: [
        this.register.startingWeight,
        Validators.compose([Validators.nullValidator]),
      ],
      goal: [this.register.goal, Validators.compose([Validators.nullValidator])], 
      hiringDate: [
        this.register.hiringDate,
        Validators.compose([Validators.nullValidator]),
      ],     
      startDate: [
        this.register.startDate,
        Validators.compose([Validators.nullValidator]),
      ],           
      dateConclusion: [
        this.register.dateConclusion,
        Validators.compose([Validators.nullValidator]),
      ],           
      cancellationDate: [
        this.register.cancellationDate,
        Validators.compose([Validators.nullValidator]),
      ],           
      reasonCancellation: [
        this.register.reasonCancellation,
        Validators.compose([Validators.nullValidator]),
      ],           
      notes: [
        this.register.notes,
        Validators.compose([Validators.nullValidator]),
      ],
      objetivo: [
        this.register.notes,
        Validators.compose([Validators.nullValidator]),
      ]
    });
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
        tap(() => {
          this.modal.close();
        }),
        catchError((errorMessage) => {
          this.modal.dismiss(errorMessage);
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
        tap(() => {
          this.modal.close();
        }),
        catchError((errorMessage) => {
          this.modal.dismiss(errorMessage);
          return of(this.register);
        })
      )
      .subscribe((res: Contrato) => (this.register = res));
    this.subscriptions.push(sbCreate);
  }

  private prepareRegister() {
    const formData = this.formContrato.value;    
    this.register.patientId = Number(this.pacienteIdContrato.id);
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
    let sum;
    if (formData.startingWeight && formData.goal) {       
       sum = (formData.goal - formData.startingWeight).toFixed(3)
    }
    return sum;
  }

  isDisabled() {    
    const formData = this.formContrato.value;
    if(!!formData.startDate){
      let date: any = new Date(formData.startDate);
      this.minDateConclusao = this.minDatepicker(date.addDays(1));
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

}
