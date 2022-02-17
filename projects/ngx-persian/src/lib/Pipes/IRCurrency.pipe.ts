import {Pipe, PipeTransform} from '@angular/core';

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
 *  This pipe formats numbers like: 123,456,123
 */
@Pipe({name: 'irc'})
export class IRCurrencyPipe implements PipeTransform {
    /**
     * @param value a number of a string only contains digits
     * @param type currency type
     * @example 1925100 -> 1,925,100 ریال
     */
    // transform(value: number | string, type?: keyof IRCurrencies, digitsInfo?: string): string | null;
    transform(value: number | string | null | undefined, type: keyof typeof IRCurrencies = 'RIAL' as keyof typeof IRCurrencies): string {
        const numericValue = Number(value);
        if (isNaN(numericValue)) {
            throw new Error(`NaN is not a acceptable number`);
        }
        return `${numericValue.toLocaleString('en-US')} ${IRCurrencies[type]}`
    }
}
