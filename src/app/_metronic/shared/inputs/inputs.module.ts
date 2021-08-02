import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePeriodInputComponent } from './date-period-Input/date-period-Input.component';
import { DateInputComponent } from './date-Input/date-Input.component';
@NgModule({
  declarations: [DateInputComponent, DatePeriodInputComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    NgbDatepickerModule,
  ],
  exports: [DateInputComponent, DatePeriodInputComponent],
})
export class InputsModule { }
