import { Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from '@angular/common';

export enum IRCurrencies {
  rial = 'ریال',
  r = 'ریال',
  toman = 'تومان',
  t = 'تومان'
}

/**
 * Formats input as a currency value.
 * default type is rial. You can choose on of the following currency types:
 *
 *      r or rial for ریال
 *
 *      to or toman for تومان
 *
 *  This pipe extends DecimalPipe, so as second parameter, you can enter your desired formatting string. Default formatter is: 1.0-0
 */
@Pipe({name: 'irc'})
export class IRCurrencyPipe extends DecimalPipe implements PipeTransform {

  /**
   * @param value a number of a string only contains digits
   * @param type currency type
   * @param digitInfo decimal pipe formatter
   * @example 1925100 -> 1,925,100 ریال
   */
  transform(value: number | string, type?: string, digitsInfo?: string, locale?: string): string | null;
  transform(value: null | undefined, type?: string , digitsInfo?: string, locale?: string): null;
  transform(value: number | string | null | undefined, type: string = 'rial', digitInfo: string = '1.0-0', locale?: string) {
    value = Number(value);
    type = type.toLowerCase();
    if (isNaN(value)) { throw new Error(`${value} is not a acceptable number`); }
    return super.transform(value, digitInfo) + ' ' + IRCurrencies[type];
  }
}
