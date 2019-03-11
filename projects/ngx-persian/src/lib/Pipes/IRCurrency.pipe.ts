import { Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from '@angular/common';

export enum IRCurrencies {
  rial = 'ریال',
  r = 'ریال',
  toman = 'تومان',
  t = 'تومان'
}

@Pipe({name: 'irc'})
export class IRCurrencyPipe extends DecimalPipe implements PipeTransform {


  transform(value: string | number, type: string = 'rial', digitInfo: string = '1.0-0') {
    value = Number(value);
    type = type.toLowerCase();
    if (isNaN(value)) { throw new Error(`${value} is not a acceptable number`); }
    return super.transform(value, digitInfo) + ' ' + IRCurrencies[type];
  }
}
