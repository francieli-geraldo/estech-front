import { MaskPercentagePipe } from './pipes/mask-percentage.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { MaskWeightPipe } from './pipes/mask-weight.pipe';

@NgModule({
  declarations: [FirstLetterPipe, SafePipe, MaskWeightPipe, MaskPercentagePipe],
  imports: [CommonModule],
  exports: [FirstLetterPipe, SafePipe, MaskWeightPipe, MaskPercentagePipe],
})
export class CoreModule { }
