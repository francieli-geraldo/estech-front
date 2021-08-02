import { Component, OnInit, Output, Input, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective } from '@angular/forms';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter, CustomDateParserFormatter } from 'src/app/_metronic/core';

@Component({
  selector: 'date-input',
  template: `<div class="input-group">
    <input readonly 
      class="form-control" 
      autocomplete="off" 
      placeholder="dd/mm/yyyy" 
      ngbDatepicker  
      #dateFilter="ngbDatepicker" 
      [maxDate]="maxDate" 
      [minDate]="minDate" 
      name="dateFilter" 
      [formControlName]="InputFormControlName" />
    <div class="input-group-append"  type="button" (click)="dateFilter.toggle()">
      <span class="input-group-text bg-white">
        <i class="text-dark-50 flaticon-calendar"></i>
      </span>
    </div>
  </div>`,
  viewProviders: [ {
    provide: ControlContainer,
    useExisting: FormGroupDirective
  }],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ]
})
export class DateInputComponent  implements OnInit {

  @Input() InputFormControlName: FormControl;
  @Input() InputMaxDate: Date;
  @Input() InputMinDate: Date;
  maxDate: any = '';
  minDate: any = '';

  ngOnInit(){
    if (this.InputMaxDate){
      this.maxDate = this.formatDatepicker(this.InputMaxDate)
    }      
    if (this.InputMinDate){
      this.minDate = this.formatDatepicker(this.InputMaxDate)
    }      
  }

  formatDatepicker(day: Date) {
    return {
      year: day.getFullYear(),
      month: Number(String(day.getMonth() + 1).padStart(2, "0")),
      day: Number(String(day.getDate()).padStart(2, "0"))
    };
  }
}
