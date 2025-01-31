import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateaNumeros',
  standalone: true
})
export class FormateaNumerosPipe implements PipeTransform {

  transform(value: number){
    return "$"+ new Intl.NumberFormat().format(value);
  }

}
