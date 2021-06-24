import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';
import { RazaoCancelamento } from 'src/app/models/razao-cancelamento.model';
import { RazoesCancelamentoService } from 'src/app/services/razoes-cancelamento.service';
import { CustomAdapter, CustomDateParserFormatter } from 'src/app/_metronic/core';

const EMPTY: RazaoCancelamento = {
  id: undefined,
  reason: '',
  description: ''
};

@Component({
  selector: 'app-form-razao-cancelamento-modal',
  templateUrl: './form-razao-cancelamento-modal.component.html',
  styleUrls: ['./form-razao-cancelamento-modal.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class FormRazaoCancelamentoModalComponent implements OnInit {

 @Input() id: number;
 @Input() register: RazaoCancelamento;

  isLoading$;
  formGroup: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    private registersService: RazoesCancelamentoService,
    private fb: FormBuilder, 
    public modal: NgbActiveModal
    ) { }

  ngOnInit(): void {
    this.isLoading$ = this.registersService.isLoading$;
    this.loadRegister();
  }

  loadRegister() {
    if (!this.id) {
      this.register = EMPTY;
    }     
    this.loadForm();
  }

  loadForm() {
    this.formGroup = this.fb.group({
      reason: [this.register.reason, Validators.compose([Validators.nullValidator])],
      description: [this.register.description, Validators.compose([Validators.nullValidator])],
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
    ).subscribe((res: RazaoCancelamento) => this.register = res);
    this.subscriptions.push(sbCreate);
  }

  private prepareRegister() {
    const formData = this.formGroup.value;
    this.register.reason = formData.reason;
    this.register.description = formData.description;
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
