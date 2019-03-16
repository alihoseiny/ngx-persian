import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {PersianNumberService} from '../Services/persian-number.service';
import {PLOptions, PersianLetterService} from '../Services/persian-letter.service';

/**
 * Reactive form validator that checks form control value contains only persian numbers.
 * @param persianNumberService
 */
export function persianNumbersValidator(persianNumberService: PersianNumberService = new PersianNumberService()): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return persianNumberService.isPersian(control.value) ? null : {'persianNumberValidation': control.value};
  };
}

/**
 * Reactive form validator that checks form control value contains only persian letters and allowed characters in the options parameter.
 * @param options see documents of isPersian method of the PersianLetterService for more info about options.
 * @param persianLetterService
 */
export function persianLettersValidator(options: PLOptions = {
                                                            persianDigits: false,
                                                            whitespaces: false,
                                                            symbols: false,
                                                            enDigits: false},
                                        persianLetterService: PersianLetterService = new PersianLetterService()): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return persianLetterService.isPersian(control.value, options) ? null : {'persianLetterValidation': control.value};
  };
}
