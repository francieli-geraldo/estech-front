import { Component, OnInit, Output, Input, EventEmitter, ElementRef, ViewChild, } from "@angular/core";
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from "@angular/forms";
import { NgbCalendar, NgbDate, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { CustomAdapter, CustomDateParserFormatter } from "src/app/_metronic/core";

@Component({
  selector: "date-period-input",
  templateUrl: "./date-period-input.component.html",
  styleUrls: ["./date-period-input.component.scss"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class DatePeriodInputComponent implements OnInit {

  @Input() fcInitialDate: FormControl;
  @Input() fcFinalDate: FormControl;  
  @Input() inputMaxDate: Date;
  @Input() inputMinDate: Date;
  @Input() formGroupBase: FormGroup;

  maxDate: any = "";
  minDate: any = "";

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  showDatePeriod: string = '';

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {  }

  ngOnInit(){
    if (this.inputMaxDate){
      this.maxDate = this.formatDatepicker(this.inputMaxDate)
    }      
    if (this.inputMinDate){
      this.minDate = this.formatDatepicker(this.inputMinDate)
    }      
  }

  formatDatepicker(day: Date) {
    return {
      year: day.getFullYear(),
      month: Number(String(day.getMonth() + 1).padStart(2, "0")),
      day: Number(String(day.getDate()).padStart(2, "0"))
    };
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.toDate = null; 
      this.formGroupBase.patchValue({
        initialDate: this.formatDateRequest(this.fromDate), 
        finalDate: null 
      })    
      this.showDatePeriod = `${this.formatDate(this.fromDate)} - dd/mm/yyyy`;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {      
      this.toDate = date;
      this.formGroupBase.patchValue({
        initialDate: this.formatDateRequest(this.fromDate), 
        finalDate: this.formatDateRequest(this.toDate) 
      })    
      this.showDatePeriod = `${this.formatDate(this.fromDate)} - ${this.formatDate(this.toDate)}`;
    } else {
      this.fromDate = date;
      this.toDate = null;            
      this.formGroupBase.patchValue({
        initialDate: this.formatDateRequest(this.fromDate), 
        finalDate: null 
      })
      this.showDatePeriod = `${this.formatDate(this.fromDate)} - dd/mm/yyyy`;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }

  formatDate(date): string {
    return date ? `${("00" + date.day).slice(-2)}/${("00" + date.month).slice(-2)}/${date.year}` : '';
  }

  formatDateRequest(date): string {
    return date ? `${date.year}-${("00" + date.month).slice(-2)}-${("00" + date.day).slice(-2)}` : '';
  }
}
