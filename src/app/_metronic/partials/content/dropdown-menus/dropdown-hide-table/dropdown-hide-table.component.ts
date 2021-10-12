import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-hide-table',
  templateUrl: './dropdown-hide-table.component.html',
})
export class DropdownHideTableComponent implements OnInit {

  @Output() onHide: EventEmitter<boolean> = new EventEmitter();
  isHide: boolean = false;

  constructor() {}

  hideTable(){
    this.isHide = !this.isHide;
    this.onHide.emit(this.isHide)   
  }

  ngOnInit(): void {}
}
