import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef, } from "@angular/core";
import { Relatorio } from "src/app/models/relatorio.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ReportsService } from "src/app/services/reports.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ExportAsConfig, ExportAsService, SupportedExtensions } from "ngx-export-as";
import { GruposService } from "src/app/services/grupos.service";
import KTDialog from '../../../assets/js/components/dialog';
import { catchError, switchMap, tap } from "rxjs/operators";
import { RelatorioSemanalComponent } from "./relatorio-semanal/relatorio-semanal.component";
import { RelatorioEvolucaoComponent } from "./relatorio-evolucao/relatorio-evolucao.component";
import { RelatorioConcluidoComponent } from "./relatorio-concluido/relatorio-concluido.component";


@Component({
  selector: "app-relatorios",
  templateUrl: "./relatorios.component.html",
  styleUrls: ["./relatorios.component.scss"],
})
export class RelatoriosComponent implements OnInit {

  @ViewChild("showReport", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  model: Relatorio = {
    id: undefined,
    report: "periodic-reports",
    status: "ACTIVE",
    groupId: "",
    initialDate: "",
    finalDate: "",
  };

  config: ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'tablerelatorio',
    options: {
      jsPDF: {
        orientation: 'landscape',
        margins: { top: '20', left: '20', right: '20' }
      }
    }
  };
  
  reportForm: FormGroup;
  maxDate = new Date();

  isDisabled: boolean = true;
  isShowReport: boolean = false;

  generateRelatorio: string;

  constructor(
    private fb: FormBuilder,
    private exportAsService: ExportAsService,
    private reportsService: ReportsService,
    public grupoService: GruposService,
    private resolver: ComponentFactoryResolver
  ) { }
  
  generateReport() {

    this.generateRelatorio = this.reportForm.value.report;
    this.isShowReport = true;

    this.container.clear();
  
    let childComponent;
    if (this.generateRelatorio == 'periodic-reports') {
      childComponent = this.resolver.resolveComponentFactory(RelatorioSemanalComponent);
    }

    if (this.generateRelatorio == 'full-report') {
      childComponent = this.resolver.resolveComponentFactory(RelatorioEvolucaoComponent);
    }

    if (this.generateRelatorio == 'completed-report') {
      childComponent = this.resolver.resolveComponentFactory(RelatorioConcluidoComponent);
    }

    this.componentRef = this.container.createComponent(childComponent);

    this.componentRef.instance.form = this.reportForm.value;    
    
    this.componentRef.instance.output.subscribe(event => console.log(event));  
    
  }

  destroyReport() {
    this.container.clear();
    this.isShowReport = false;
  }

  exportAs(type: SupportedExtensions, opt?: string) {
    this.config.type = type;
    if (opt) {
      this.config.options.jsPDF.orientation = opt;
    }
    this.exportAsService.save(
      this.config,
      `rel-${this.model.report}-${new Date().toLocaleString().replace(/[^a-z0-9]/gi, '')}`
    ).subscribe(() => {});
  }

  pdfCallbackFn(pdf: any) {
    const noOfPages = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= noOfPages; i++) {
      pdf.setPage(i);
      pdf.text(
        `Afina-se página ${i} de ${noOfPages}`,
        pdf.internal.pageSize.getWidth() - 40,
        pdf.internal.pageSize.getHeight() - 2
      );
    }
  }

  loadForm() {
    this.reportForm = this.fb.group({
      report: [this.model.report, Validators.compose([Validators.required])],
      status: [this.model.status, Validators.compose([Validators.required])],
      groupId: [this.model.groupId, Validators.compose([Validators.required])],
      initialDate: [this.model.initialDate, Validators.nullValidator],
      finalDate: [this.model.finalDate, Validators.nullValidator],
    });

    this.reportForm.controls['report'].valueChanges.subscribe(value => {
      if (value == 'periodic-reports') {
      
        this.reportForm.get('initialDate').setValidators(Validators.required)
        this.reportForm.get('finalDate').setValidators(Validators.required)
        this.reportForm.get('status').setValidators(Validators.required)
      
      } else if(value == 'completed-report'){        
        
        this.reportForm.get('status').clearValidators();
        this.reportForm.get('initialDate').clearValidators();
        this.reportForm.get('finalDate').clearValidators();
        
      } else {
        
        this.reportForm.get('status').setValidators(Validators.required)
        this.reportForm.get('initialDate').clearValidators();
        this.reportForm.get('finalDate').clearValidators();

      }
      this.reportForm.patchValue({ groupId: '', initialDate: '', finalDate: '', status: '' });
      this.isDisabled = true;
    });

    this.reportForm.controls['status'].valueChanges.subscribe(value => {
      this.reportForm.updateValueAndValidity();
      this.isDisabled = this.reportForm.invalid;
    });

    this.reportForm.controls['groupId'].valueChanges.subscribe(value => {
      this.reportForm.updateValueAndValidity();
      this.isDisabled = this.reportForm.invalid;
    });

    this.reportForm.controls['initialDate'].valueChanges.subscribe(value => {
      this.reportForm.updateValueAndValidity();
      this.isDisabled = this.reportForm.invalid;
    });

    this.reportForm.controls['finalDate'].valueChanges.subscribe(value => {
      this.reportForm.updateValueAndValidity();
      this.isDisabled = this.reportForm.invalid;
    });
  }

  ngOnInit() {
    this.grupoService.fetch();    
    this.loadForm();
  }

  ngOnDestroy() {
    this.componentRef?.destroy();
  }

}
