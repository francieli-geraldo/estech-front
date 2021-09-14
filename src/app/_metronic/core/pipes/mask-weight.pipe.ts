// Angular
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Returns formatted weight
 */
@Pipe({
  name: 'maskWeight',
})
export class MaskWeightPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param value: any
   */
  transform(value: any): any {
    return (value !== '' && !!value) ? parseFloat(value).toFixed(3).replace('.',',') : '0,000';
  }
}
