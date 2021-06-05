import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExportAsConfig, ExportAsService, SupportedExtensions } from 'ngx-export-as';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-relatorio-paciente-modal',
  templateUrl: './relatorio-paciente-modal.component.html',
  styleUrls: ['./relatorio-paciente-modal.component.scss']
})
export class RelatorioPacienteModalComponent implements OnInit {
  
  config: ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'relMonitoramento',
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

  @Input() id: number;
  subscriptions: Subscription[] = [];

  constructor( 
    public modal: NgbActiveModal,
    private exportAsService: ExportAsService) { }

  ngOnInit(): void {  
  }

  genareteRelatorio() {      
    this.modal.dismiss();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  exportAs(type: SupportedExtensions, opt?: string) {
    this.config.type = type;
    if (opt) {
      this.config.options.jsPDF.orientation = opt;
    }
    this.exportAsService.save(
      this.config, 
      `rel-monito-${new Date().toLocaleString().replace(/[^a-z0-9]/gi,'')}`
    ).subscribe(() => {      
    });
  }
  
}