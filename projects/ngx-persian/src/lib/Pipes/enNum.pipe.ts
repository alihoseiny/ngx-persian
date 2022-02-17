import {Pipe, PipeTransform} from '@angular/core';
import {PersianNumberService} from '../Services/persian-number.service';

/**
 * Replaces all persian numbers in the text to the english numbers.
 *
 * @example {{persianTextDigit | enNum}}
 */
@Pipe({name: 'enNum'})
export class EnNumPipe implements PipeTransform {

    constructor(private persianNumberService: PersianNumberService) {
    }

    /**
     * @return input value replaced all persian digits with english digits.
     * @param value a string containing one or more non-english digits. Could be an empty string.
     */
    transform(value: string): string {
        const strValue = String(value);
        return this.persianNumberService.toEnglish(strValue);
    }
}
