import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  NgbActiveModal,
  NgbDateAdapter,
  NgbDateParserFormatter,
} from "@ng-bootstrap/ng-bootstrap";
import { defineLocale, locale } from "moment";
import { of, Subscription } from "rxjs";
import { catchError, first, tap } from "rxjs/operators";
import { Contrato } from "src/app/models/contrato.model";
import { ContratosService } from "src/app/services/contratos.service";
import {
  CustomAdapter,
  CustomDateParserFormatter,
} from "src/app/_metronic/core";

const EMPTY_CONTRATO: Contrato = {
  id: undefined,
  programa: 0,
  grupo: 0,
  dt_inicio: "",
  dt_conclusao: "",
  status: 0,
  peso_inicial: 0,
  meta: 0,
  objetivo: 0,
  dt_contratacao_plus: "",
  dt_cancelamento_plus: "",
  dt_cancelamento: "",
  motivo: "",
  observacao: "",
  plus: false,
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
  valueObjetivo: number;
  isLoading$;
  formContrato: FormGroup;
  private subscriptions: Subscription[] = [];
  minDate;
  minDateConclusao;
  maxDate = new Date(2020, 0, 1);

  constructor(
    private registersService: ContratosService,
    private fb: FormBuilder,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.minDate = this.minDatepicker(new Date());

    this.isLoading$ = this.registersService.isLoading$;
    this.loadRegister();
  }

  loadRegister() {
    if (!this.id) {
      this.register = EMPTY_CONTRATO;
    }     
    this.loadForm();
  }

  loadForm() {
    
    this.formContrato = this.fb.group({
      programa: [
        this.register.programa,
        Validators.compose([Validators.nullValidator]),
      ],
      grupo: [this.register.grupo, Validators.compose([Validators.nullValidator])],
      dt_inicio: [
        this.register.dt_inicio,
        Validators.compose([Validators.nullValidator]),
      ],
      dt_conclusao: [
        this.register.dt_conclusao,
        Validators.compose([Validators.nullValidator]),
      ],
      status: [this.register.status, Validators.compose([Validators.nullValidator])],
      peso_inicial: [
        this.register.peso_inicial,
        Validators.compose([Validators.nullValidator]),
      ],
      meta: [this.register.meta, Validators.compose([Validators.nullValidator])],
      objetivo: [
        this.register.meta,
        Validators.compose([Validators.nullValidator]),
      ],
      dt_contratacao_plus: [
        this.register.dt_contratacao_plus,
        Validators.compose([Validators.nullValidator]),
      ],
      dt_cancelamento_plus: [
        this.register.dt_cancelamento_plus,
        Validators.compose([Validators.nullValidator]),
      ],
      dt_cancelamento: [
        this.register.dt_cancelamento,
        Validators.compose([Validators.nullValidator]),
      ],
      motivo: [
        this.register.motivo,
        Validators.compose([Validators.nullValidator]),
      ],
      observacao: [
        this.register.observacao,
        Validators.compose([Validators.nullValidator]),
      ],
      plus: [
        this.register.plus,
        Validators.compose([Validators.nullValidator]),
      ],
    });
  }
  

  save() {
    this.prepareRegister();
    if (this.register.id) {
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
    this.register.programa = formData.programa;
    this.register.grupo = formData.grupo;
    this.register.dt_inicio = formData.dt_inicio;
    this.register.dt_conclusao = formData.dt_conclusao;
    this.register.status = formData.status;
    this.register.peso_inicial = formData.peso_inicial;
    this.register.meta = formData.meta;
    this.register.objetivo = formData.objetivo;
    this.register.dt_contratacao_plus = formData.dt_contratacao_plus;
    this.register.dt_cancelamento_plus = formData.dt_cancelamento_plus;
    this.register.dt_cancelamento = formData.dt_cancelamento;
    this.register.motivo = formData.motivo;
    this.register.observacao = formData.observacao;
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
    if (formData.peso_inicial && formData.meta) {
      this.valueObjetivo = formData.meta - formData.peso_inicial;
    }
  }

  isDisabled() {    
    const formData = this.formContrato.value;
    if(!!formData.dt_inicio){
      let date: any = new Date(formData.dt_inicio);
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

  searchPaciente() {

  }
}
