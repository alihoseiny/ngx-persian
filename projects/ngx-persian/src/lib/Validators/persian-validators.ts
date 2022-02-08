import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {PersianNumberService} from '../Services/persian-number.service';
import {PersianLetterService, PLOptions} from '../Services/persian-letter.service';

/**
 * Reactive form validator that checks form control value contains only persian numbers.
 *
 * @param persianNumberService
 */
export function persianNumbersValidator(persianNumberService: PersianNumberService = new PersianNumberService()): ValidatorFn { // eslint-disable-line prefer-arrow/prefer-arrow-functions
    return (control: AbstractControl): ValidationErrors | null => persianNumberService.isPersian(control.value) ? null : {persianNumberValidation: control.value};
}

/**
 * Reactive form validator that checks form control value contains only persian letters and allowed characters in the options parameter.
 *
 * @param options see documents of isPersian method of the PersianLetterService for more info about options.
 * @param persianLetterService
 */
export function persianLettersValidator(         // eslint-disable-line prefer-arrow/prefer-arrow-functions
    options: PLOptions = {persianDigits: false, whitespaces: false, symbols: false, enDigits: false},
    persianLetterService: PersianLetterService = new PersianLetterService()
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => persianLetterService.isPersian(control.value, options) ? null : {persianLetterValidation: control.value};
}
