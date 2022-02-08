import {Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from '@angular/common';

export enum IRCurrencies {      // eslint-disable-line no-shadow
    RIAL = 'ریال',
    R = 'ریال',
    TOMAN = 'تومان',
    T = 'تومان'
}

/**
 * Formats input as a currency value.
 * default type is rial. You can choose on of the following currency types:
 *
 *      R or RIAL for ریال
 *
 *      T or TOMAN for تومان
 *
 *  This pipe extends DecimalPipe, so as second parameter, you can enter your desired formatting string. Default formatter is: 1.0-0
 */
@Pipe({name: 'irc'})
export class IRCurrencyPipe implements PipeTransform {

    constructor(private decimalPipe: DecimalPipe) {
    }

    /**
     * @param value a number of a string only contains digits
     * @param type currency type
     * @param digitInfo decimal pipe formatter
     * @example 1925100 -> 1,925,100 ریال
     */
    // transform(value: number | string, type?: keyof IRCurrencies, digitsInfo?: string): string | null;
    transform(value: number | string | null | undefined, type: keyof typeof IRCurrencies = 'RIAL' as keyof typeof IRCurrencies, digitInfo: string = '1.0-0'): string {
        const numericValue = Number(value);
        // const currencyType = type.toLowerCase();
        if (isNaN(numericValue)) {
            throw new Error(`${value} is not a acceptable number`);
        }
        return this.decimalPipe.transform(numericValue, digitInfo) + ' ' + IRCurrencies[type];
    }
}
