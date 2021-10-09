import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  declarations: [Dashboard1Component],
  imports: [
    CommonModule, 
    WidgetsModule
  ],
  exports: [Dashboard1Component],
})
export class DashboardsModule { }
