import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownHideTableComponent } from './dropdown-hide-table/dropdown-hide-table.component';

@NgModule({
  declarations: [
    DropdownHideTableComponent,
  ],
  imports: [CommonModule],
  exports: [
    DropdownHideTableComponent,
  ],
})
export class DropdownMenusModule {}
