import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dailies-table',
  templateUrl: './dailies-table.component.html',
})
export class DailiesTableComponent {
  @Input() cssClass;

  constructor() { }
}
