import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import KTWizard from '../../../assets/js/components/wizard';
import { KTUtil } from '../../../assets/js/components/util';
import { Relatorio } from 'src/app/models/relatorio.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RelatoriosService } from 'src/app/services/relatorios.service';
import { ActivatedRoute, Router } from '@angular/router';

const EMPTY_RELATORIO: Relatorio = {
  id: undefined,
  relatorio: "1",
  status:"",
  grupo: "",
  semana: ""
};

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit, AfterViewInit, OnDestroy {

  
  @ViewChild('wizard', { static: true }) el: ElementRef;
  submitted = false;
  wizard: any;

  data: any;
  model: Relatorio;
  relatorio: Relatorio;
  previous: Relatorio;  
  generateRelatorio = false;


  formGroup: FormGroup;
  errorMessage = '';
  private subscriptions: Subscription[] = [];
  
  constructor(
    private fb: FormBuilder,
    private relatoriosService: RelatoriosService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.model = EMPTY_RELATORIO;
    this.loadForm();
  }

  ngAfterViewInit(): void {
    this.wizard = new KTWizard(this.el.nativeElement, {
      startStep: 1
    });  
  }

  setgenerateRelatorioFalse() {    
    this.generateRelatorio = false;
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnDestroy() {
    this.wizard = undefined;
  }
    
  loadForm() {
    if (!this.model) {
      return;
    }

    this.formGroup = this.fb.group({
      relatorio: [this.model.relatorio, Validators.compose([Validators.required])],
      status: [this.model.status, Validators.compose([Validators.nullValidator])],
      grupo: [this.model.grupo, Validators.compose([Validators.nullValidator])],
      semana: [this.model.semana, Validators.compose([Validators.nullValidator])],
    })
  }

  genarete(){
    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid) {
      return;
    }
    const formValues = this.formGroup.value;
    this.model = Object.assign(this.model, formValues);
    
    this.data = [{
      grupo: 4,
      pacientes: [{
        nome: 'Katia Zelia', programa: 'Turbo', c: 3, lm: 4, a:5, lt:2, j: 4, h: 6, postagens: '50%', balanca: 6, p_balanca: '90%', evolucao:'4.00', objetivo: '22', observacao: 'teste'},
        {
          nome: 'Aline Maria', programa: 'Turbo', c: 3, lm: 4, a:5, lt:2, j: 4, h: 6, postagens: '50%', balanca: 6, p_balanca: '90%', evolucao:'4.00', objetivo: '22', observacao: 'teste'
      }] 
    },
    {
      grupo: 6,
      pacientes: [{
        nome: 'Joaquina de Lurdes', programa: 'Turbo', c: 3, lm: 4, a:5, lt:2, j: 4, h: 6, postagens: '50%', balanca: 6, p_balanca: '90%', evolucao:'4.00', objetivo: '22', observacao: 'teste'},
        {
          nome: 'Rafael Gomes Torantin', programa: 'Turbo', c: 3, lm: 4, a:5, lt:2, j: 4, h: 6, postagens: '50%', balanca: 6, p_balanca: '90%', evolucao:'4.00', objetivo: '22', observacao: 'teste'
      }] 
    }];
        
    this.generateRelatorio = true;
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