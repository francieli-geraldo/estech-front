import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dailies-table',
  templateUrl: './dailies-table.component.html',
  styleUrls: ['./dailies-table.component.scss'],
})
export class DailiesTableComponent {
  @Input() cssClass;

  constructor() { }
}
