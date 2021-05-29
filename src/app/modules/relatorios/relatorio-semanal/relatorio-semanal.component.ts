import { Component, Input, OnInit } from '@angular/core';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';

@Component({
  selector: 'app-relatorio-semanal',
  templateUrl: './relatorio-semanal.component.html',
  styleUrls: ['./relatorio-semanal.component.scss']
})
export class RelatorioSemanalComponent implements OnInit {

  @Input() data: any;
  @Input() relatorio: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
