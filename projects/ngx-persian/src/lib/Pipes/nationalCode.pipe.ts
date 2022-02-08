import {Pipe, PipeTransform} from '@angular/core';

/**
 * Formats a 10-digit number or string to national code format.
 */
@Pipe({name: 'nationalCode'})
export class NationalCodePipe implements PipeTransform {

    /**
     * @param value a 10-digit number or a string only contains 10 digits.
     * @example 001-236547-5
     * @return a formatted text from 10-digit input or an empty string if length of the input is not 10.
     */
    transform(value: string | number): string {
        const normalizedValue = String(value);
        if (normalizedValue.length !== 10) {
            return '';
        }
        return `${normalizedValue.substring(0, 3)}-${normalizedValue.substring(3, 9)}-${normalizedValue[9]}`;
    }
}
