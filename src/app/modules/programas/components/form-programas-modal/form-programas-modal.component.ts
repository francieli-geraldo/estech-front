import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';
import { Programa } from 'src/app/models/programa.model';
import { ProgramasService } from 'src/app/services/programas.service';
import { CustomAdapter, CustomDateParserFormatter } from 'src/app/_metronic/core';

const EMPTY_PROGRAMA: Programa = {
  id: undefined,
  nome: '',
  descricao: ''
};

@Component({
  selector: 'app-form-programas-modal',
  templateUrl: './form-programas-modal.component.html',
  styleUrls: ['./form-programas-modal.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class FormProgramasModalComponent implements OnInit {

 @Input() id: number;
 @Input() register: Programa;

  isLoading$;
  formGroup: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    private registersService: ProgramasService,
    private fb: FormBuilder, 
    public modal: NgbActiveModal
    ) { }

  ngOnInit(): void {
    this.isLoading$ = this.registersService.isLoading$;
    this.loadRegister();
  }

  loadRegister() {
    if (!this.id) {
      this.register = EMPTY_PROGRAMA;
    }     
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      nome: [this.register.nome, Validators.compose([Validators.nullValidator])],
      descricao: [this.register.descricao, Validators.compose([Validators.nullValidator])],
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
    ).subscribe((res: Programa) => this.register = res);
    this.subscriptions.push(sbCreate);
  }

  private prepareRegister() {
    const formData = this.formGroup.value;
    this.register.nome = formData.nome;
    this.register.descricao = formData.descricao;
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
