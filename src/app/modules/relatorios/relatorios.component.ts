import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import KTWizard from '../../../assets/js/components/wizard';
import { KTUtil } from '../../../assets/js/components/util';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('wizard', { static: true }) el: ElementRef;

  model: any = {
    relatorio: "",
    status:"",
    grupo: "",
    semana: ""
  };

  isDisabled: boolean = false;
  submitted = false;
  wizard: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Initialize form wizard
    this.wizard = new KTWizard(this.el.nativeElement, {
      startStep: 1
    });

    // Validation before going to next page
    this.wizard.on('beforeNext', (wizardObj) => {
      // https://angular.io/guide/forms
      // https://angular.io/guide/form-validation

      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });
   
  }

  isCheck() {
    this.model.relatorio == '1'
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnDestroy() {
    this.wizard = undefined;
  }
}