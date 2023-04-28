import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cop'
})
export class CopPipe implements PipeTransform {

  currencyPipe = new CurrencyPipe('es-CO');

  transform(value: number): string|null {
    const newValue = this.currencyPipe.transform(value / 100, 'COP', '');
    return `$ ${newValue}`
  }

}
