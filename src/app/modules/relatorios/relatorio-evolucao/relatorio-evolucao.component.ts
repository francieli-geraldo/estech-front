import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-evolucao',
  templateUrl: './relatorio-evolucao.component.html',
  styleUrls: ['./relatorio-evolucao.component.scss']
})
export class RelatorioEvolucaoComponent implements OnInit {

  @Input() data: any;
  @Input() relatorio: any;

  constructor() { }

  ngOnInit(): void {
  }

}
