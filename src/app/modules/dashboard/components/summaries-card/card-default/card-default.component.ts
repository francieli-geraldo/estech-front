import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.scss']
})
export class CardDefaultComponent implements OnInit {
  @Input() cssClass = '';
  @Input() widgetHeight = '150px';
  @Input() iconColor = 'success';
  @Input() svg = 'Communication/Group';
  @Input() Description = 'Communication/Group';
  @Input() baseColor = 'success';
  
  @Input() data: Observable<any>;

  svgCSSClass;

  constructor() { }

  ngOnInit() {    
    this.cssClass = `card card-custom gutter-b card-stretch bg-${this.baseColor} ${this.cssClass}`;
    this.svgCSSClass = `svg-icon--${this.iconColor}`;
  }
}
