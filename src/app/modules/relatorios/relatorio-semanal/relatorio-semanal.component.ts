import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-semanal',
  templateUrl: './relatorio-semanal.component.html',
  styleUrls: ['./relatorio-semanal.component.scss']
})
export class RelatorioSemanalComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
