import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-concluido',
  templateUrl: './relatorio-concluido.component.html',
  styleUrls: ['./relatorio-concluido.component.scss']
})
export class RelatorioConcluidoComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
