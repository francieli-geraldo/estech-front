import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Relatorio } from "src/app/models/relatorio.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ReportsService } from "src/app/services/reports.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ExportAsConfig, ExportAsService, SupportedExtensions } from "ngx-export-as";
import { GruposService } from "src/app/services/grupos.service";
import KTDialog from '../../../assets/js/components/dialog';
import { catchError, tap } from "rxjs/operators";


@Component({
  selector: "app-relatorios",
  templateUrl: "./relatorios.component.html",
  styleUrls: ["./relatorios.component.scss"],
})
export class RelatoriosComponent implements OnInit, OnDestroy {

  config: ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'tablerelatorio',
    options: { jsPDF: {
        orientation: 'landscape',
        margins: { top: '20', left: '20', right: '20' }
      }
    }
  };
  submitted = false;
  wizard: any;
  datateste: any;
  teste: any;
  model: Relatorio = {
    id: undefined,
    report: "periodic-reports",
    status: "ACTIVE",
    groupId: "",
    initialDate: "",
    finalDate: "",
  };  
  relatorio: Relatorio;
  previous: Relatorio;

  reportForm: FormGroup;
  errorMessage = "";
  isDisabled = true;

  private subscriptions: Subscription[] = [];
  maxDate = new Date();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private exportAsService: ExportAsService,
    private reportsService: ReportsService,
    public grupoService: GruposService,
  ) {}

  generateRelatorio = '';
  isShowReport: boolean = false;
  ngOnInit() {    
    this.grupoService.fetch();
    this.loadForm();
  }

  setFalseShowReport() {
    this.isShowReport = false;
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnDestroy() {
    this.wizard = undefined;
  }

  loadForm() {
    
    this.reportForm = this.fb.group({
      report: [
        this.model.report,
        Validators.compose([Validators.required]),
      ],
      status: [
        this.model.status,
        Validators.compose([Validators.nullValidator]),
      ],
      groupId: [this.model.groupId, Validators.compose([Validators.required])],
      initialDate:[this.model.initialDate, Validators.compose([Validators.required])],
      finalDate:[this.model.finalDate, Validators.compose([Validators.required])],
    });

    this.reportForm.controls['report'].valueChanges.subscribe(value => {      
      this.reportForm.patchValue({groupId: '', initialDate: '', finalDate: '', status: '' });
      this.isDisabled = true;
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
  
  onFormChange(){
    
    this.isDisabled = false;
  }

  generateReport() {

    this.reportForm.markAllAsTouched();
    if (this.reportForm.invalid) {
      return;
    }        

    
    const report = this.reportForm.value.report;    
    
    this.model = Object.assign(this.model, report);    
    this.datateste = [{
            grupo: 4,
            pacientes: [
              {
                nome: "Katia Zelia",
                programa: "Turbo",
                c: 3,
                lm: 4,
                a: 5,
                lt: 2,
                j: 4,
                h: 6,
                postagens: "50%",
                balanca: 6,
                p_balanca: "90%",
                evolucao: "4.00",
                objetivo: "22",
                observacao: "teste",
              },
              {
                nome: "Aline Maria",
                programa: "Turbo",
                c: 3,
                lm: 4,
                a: 5,
                lt: 2,
                j: 4,
                h: 6,
                postagens: "50%",
                balanca: 6,
                p_balanca: "90%",
                evolucao: "4.00",
                objetivo: "22",
                observacao: "teste",
              },
            ],
            total: {
              c: "6",
              lm: "8",
              a: "10",
              lt: "4",
              j: "8",
              h: "12",
              postagens: "100%",
              balanca: "12",
              p_balanca: "180%",
              evolucao: "8.00",
              objetivo: "-44",
            },
          },
          {
            grupo: 6,
            pacientes: [
              {
                nome: "Joaquina de Lurdes",
                programa: "Turbo",
                c: 3,
                lm: 4,
                a: 5,
                lt: 2,
                j: 4,
                h: 6,
                postagens: "50%",
                balanca: 6,
                p_balanca: "90%",
                evolucao: "4.00",
                objetivo: "22",
                observacao: "teste",
              },
              {
                nome: "Rafael Gomes Torantin",
                programa: "Turbo",
                c: 3,
                lm: 4,
                a: 5,
                lt: 2,
                j: 4,
                h: 6,
                postagens: "50%",
                balanca: 6,
                p_balanca: "90%",
                evolucao: "4.00",
                objetivo: "22",
                observacao: "teste",
              },
            ],
            total: {
              c: "6",
              lm: "8",
              a: "10",
              lt: "4",
              j: "8",
              h: "12",
              postagens: "100%",
              balanca: "12",
              p_balanca: "180%",
              evolucao: "8.00",
              objetivo: "-44",
            },
          },
    ];
        
    this.generateRelatorio = report;  
    

    const params = Object.assign({}, this.reportForm.value);
    delete params["report"];
    const sbUpdate = this.reportsService
      .getReport({ report, params })      
      .pipe(
        tap(() => {
        })
      )
      .subscribe((res) => (this.isDisabled = false, this.isShowReport = true, this.teste = res));

    this.subscriptions.push(sbUpdate);

    
  }

  exportAs(type: SupportedExtensions, opt?: string) {
    this.config.type = type;
    if (opt) {
      this.config.options.jsPDF.orientation = opt;
    }
    this.exportAsService.save(
      this.config, 
      `rel-${this.model.report}-${new Date().toLocaleString().replace(/[^a-z0-9]/gi,'')}`
    ).subscribe(() => {
      
    });
  }

  pdfCallbackFn (pdf: any) {
    const noOfPages = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= noOfPages; i++) {
      pdf.setPage(i);
      pdf.text(
        `Afina-se página ${i} de ${noOfPages}`, 
        pdf.internal.pageSize.getWidth()-40, 
        pdf.internal.pageSize.getHeight()-2
      );
    }
  }

}
