import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, finalize, first, tap } from 'rxjs/operators';
import { Paciente } from '../../../../models/paciente.model';
import { PacientesService } from '../../../../services/pacientes.service';
import { CustomAdapter, CustomDateParserFormatter, getDateFromString } from '../../../../_metronic/core';

const EMPTY_PACIENTE: Paciente = {
  id: undefined,
  name: '',
  birthDate: '',
  sex: '',
  email: '',
  phone: ''
};

@Component({
  selector: 'app-form-paciente-modal',
  templateUrl: './form-paciente-modal.component.html',
  styleUrls: ['./form-paciente-modal.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class FormPacienteModalComponent implements OnInit, OnDestroy {
  
  @Input() id: number;
  isLoading$;
  register: Paciente;
  formGroup: FormGroup;
  private subscriptions: Subscription[] = [];
  constructor(
    private registersService: PacientesService,
    private fb: FormBuilder, 
    public modal: NgbActiveModal
    ) { }

  ngOnInit(): void {
    this.isLoading$ = this.registersService.isLoading$;
    this.loadRegister();
  }

  loadRegister() {
    if (!this.id) {
      this.register = EMPTY_PACIENTE;
      this.loadForm();
    } else {
      const sb = this.registersService.getItemById(this.id).pipe(
        catchError((errorMessage) => {
          this.modal.dismiss(errorMessage);
          return of(EMPTY_PACIENTE);
        })
      ).subscribe(({ data }: any) => {
        this.register = data;
        this.loadForm();
      });
      this.subscriptions.push(sb);
    }
  }

  loadForm() {
    this.formGroup = this.fb.group({
      name: [this.register.name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      birthDate: [this.register.birthDate, Validators.compose([Validators.nullValidator])],
      sex: [this.register.sex, Validators.compose([Validators.required])],
      email: [this.register.email, Validators.compose([Validators.required, Validators.email])],
      phone: [this.register.phone, Validators.compose([Validators.required])]
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
    const sbUpdate = this.registersService.update(this.register).pipe(
      tap(() => {
        this.modal.close();
      }),
      catchError((errorMessage) => {
        this.modal.dismiss(errorMessage);
        return of(this.register);
      }),
    ).subscribe(res => this.register = res);
    console.log(sbUpdate);
    
    this.subscriptions.push(sbUpdate);
  }

  create() {
    const sbCreate = this.registersService.create(this.register).pipe(
      tap(() => {
        this.modal.close();
      }),
      catchError((errorMessage) => {
        this.modal.dismiss(errorMessage);
        return of(this.register);
      }),
    ).subscribe((res: Paciente) => this.register = res);
    this.subscriptions.push(sbCreate);
  }

  private prepareRegister() {
    const formData = this.formGroup.value;
    this.register.name =  formData.name;
    this.register.birthDate =  formData.birthDate;
    this.register.sex =  formData.sex;
    this.register.email =  formData.email;
    this.register.phone =  formData.phone;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }
}
