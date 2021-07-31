import { GruposService } from 'src/app/services/grupos.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import KTWizard from "../../../assets/js/components/wizard";
import { KTUtil } from "../../../assets/js/components/util";
import { Relatorio } from "src/app/models/relatorio.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { RelatoriosService } from "src/app/services/relatorios.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ExportAsConfig, ExportAsService, SupportedExtensions } from "ngx-export-as";

const EMPTY_RELATORIO: Relatorio = {
  id: undefined,
  relatorio: "semanal",
  status: "",
  grupo: "",
  semana: "",
};

@Component({
  selector: "app-relatorios",
  templateUrl: "./relatorios.component.html",
  styleUrls: ["./relatorios.component.scss"],
})
export class RelatoriosComponent implements OnInit, OnDestroy {

  config: ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'tablerelatorio',
    options: {
      jsPDF: {
        orientation: 'landscape',
        margins: {
          top: '20',
          left: '20',
          right: '20'
        }
      },
    }
  };


  submitted = false;
  wizard: any;

  data: any;
  model: Relatorio;
  relatorio: Relatorio;
  previous: Relatorio;
  generateRelatorio = false;

  formGroup: FormGroup;
  errorMessage = "";
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private relatoriosService: RelatoriosService,
    private router: Router,
    private route: ActivatedRoute,
    private exportAsService: ExportAsService,
    public grupoService: GruposService
  ) {}

  ngOnInit() {
    this.model = EMPTY_RELATORIO;
    this.grupoService.fetch();
    this.loadForm();
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
      relatorio: [
        this.model.relatorio,
        Validators.compose([Validators.required]),
      ],
      status: [
        this.model.status,
        Validators.compose([Validators.nullValidator]),
      ],
      grupo: [this.model.grupo, Validators.compose([Validators.nullValidator])],
      semana: [
        this.model.semana,
        Validators.compose([Validators.nullValidator]),
      ],
    });
  }

  genarete() {
    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid) {
      return;
    }
    const formValues = this.formGroup.value;
    this.model = Object.assign(this.model, formValues);

    this.data = [
      {
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

  exportAs(type: SupportedExtensions, opt?: string) {
    this.config.type = type;
    if (opt) {
      this.config.options.jsPDF.orientation = opt;
    }
    this.exportAsService.save(
      this.config, 
      `rel-${this.model.relatorio}-${new Date().toLocaleString().replace(/[^a-z0-9]/gi,'')}`
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
