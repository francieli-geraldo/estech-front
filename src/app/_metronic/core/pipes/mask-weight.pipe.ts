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
   if(!(value !== '' && !!value)) {
    return '0,000';
   }

   return (value).toLocaleString('pt-BR', {
      currency: 'BRL',
      minimumFractionDigits: 3
    });
  }

  
}
