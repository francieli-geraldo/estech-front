import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { PacientesService } from '../../../services/pacientes.service';
import { Paciente } from '../../../models/paciente.model';

const EMPTY_PACIENTE: Paciente = {
  id: undefined,
  nome: '',
  dt_nascimento: '',
  sexo: '',
  email: '',
  celular: ''
};

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.scss']
})
export class EditPacienteComponent implements OnInit, OnDestroy {
  id: number;
  paciente: Paciente;
  previous: Paciente;
  formGroup: FormGroup;
  isLoading$: Observable<boolean>;
  errorMessage = '';
  tabs = {
    INFOMACOES_PACIENTE_TAB: 0,
    CONTRATOS_TAB: 1,
    LANCAMENTOS_TAB: 2
  };
  activeTabId = this.tabs.INFOMACOES_PACIENTE_TAB; // 0 => Basic info | 1 => Remarks | 2 => Specifications
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private pacientesService: PacientesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.pacientesService.isLoading$;
    this.loadPaciente();
  }

  loadPaciente() {
    const sb = this.route.paramMap.pipe(
      switchMap(params => {
        // get id from URL
        this.id = Number(params.get('id'));
        if (this.id || this.id > 0) {
          return this.pacientesService.getItemById(this.id);
        }
        return of(EMPTY_PACIENTE);
      }),
      catchError((errorMessage) => {
        this.errorMessage = errorMessage;
        return of(undefined);
      }),
    ).subscribe((res: Paciente) => {
      if (!res) {
        this.router.navigate(['/pacientes'], { relativeTo: this.route });
      }

      this.paciente = res;
      this.previous = Object.assign({}, res);
      this.loadForm();
    });
    this.subscriptions.push(sb);
  }

  loadForm() {
    if (!this.paciente) {
      return;
    }

    this.formGroup = this.fb.group({
      nome: [this.paciente.nome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      dt_nascimento: [this.paciente.dt_nascimento, Validators.compose([Validators.nullValidator])],
      sexo: [this.paciente.sexo, Validators.compose([Validators.required])],
      email: [this.paciente.email, Validators.compose([Validators.required, Validators.email])],
      celular: [this.paciente.celular, Validators.compose([Validators.required])]
    });
  }

  reset() {
    if (!this.previous) {
      return;
    }

    this.paciente = Object.assign({}, this.previous);
    this.loadForm();
  }

  save() {
    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid) {
      return;
    }

    const formValues = this.formGroup.value;
    this.paciente = Object.assign(this.paciente, formValues);
    if (this.id) {
      this.edit();
    } else {
      this.create();
    }
  }

  edit() {
    const sbUpdate = this.pacientesService.update(this.paciente).pipe(
      tap(() => this.router.navigate(['/pacientes'])),
      catchError((errorMessage) => {
        console.error('UPDATE ERROR', errorMessage);
        return of(this.paciente);
      })
    ).subscribe(res => this.paciente = res);
    this.subscriptions.push(sbUpdate);
  }

  create() {
    const sbCreate = this.pacientesService.create(this.paciente).pipe(
      tap(() => this.router.navigate(['/pacientes'])),
      catchError((errorMessage) => {
        console.error('UPDATE ERROR', errorMessage);
        return of(this.paciente);
      })
    ).subscribe(res => this.paciente = res as Paciente);
    this.subscriptions.push(sbCreate);
  }

  changeTab(tabId: number) {
    this.activeTabId = tabId;
  }

  ngOnDestroy() {
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

  controlHasError(validation: string, controlName: string) {
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }
}
