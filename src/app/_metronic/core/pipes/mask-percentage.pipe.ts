// Angular
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Returns the formatted percentage
 */
@Pipe({
  name: 'maskPercentage',
})
export class MaskPercentagePipe implements PipeTransform {
  /**
   * Transform
   *
   * @param value: any
   */
  transform(value: any): any {
    return (value !== '' && !!value) ? parseFloat(value).toFixed(2).replace('.',',') : '0,00';
  }
}
