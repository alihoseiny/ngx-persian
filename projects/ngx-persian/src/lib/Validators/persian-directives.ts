import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {persianLettersValidator, persianNumbersValidator} from './persian-validators';
import {PLOptions} from '../Services/persian-letter.service';


/**
 * You can add PersianNumbersDirective property to your input tag for using persianNumbersValidator function on its value.
 * @see persianNumbersValidator
 */
@Directive({
  selector: 'PersianNumbersDirective',
  providers: [{provide: NG_VALIDATORS, useExisting: PersianNumbersDirective}]
})
export class PersianNumbersDirective implements Validator {

  /**
   * Only a wrapper for persianNumbersValidator validator function.
   * @param control
   * @return null for success or ValidationError for invalid inputs
   */
  validate(control: AbstractControl): {[key: string]: any} | null {
    return persianNumbersValidator()(control);
  }
}

/**
 * You can add PersianLetterDirective property to your input tag for using persianNumbersValidator function on its value
 * For setting options value, you can simply set PersianLetterDirective property equal to the PLOptions object.
 * @see persianLettersValidator
 */
@Directive({
  selector: 'persianLettersValidator',
  providers: [{provide: NG_VALIDATORS, useExisting: PersianLetterDirective}]
})
export class PersianLetterDirective implements Validator {

  @Input('PersianLetterDirective') options: PLOptions;

  /**
   * Only a wrapper for persianLettersValidator validator function.
   * @param control
   * @return null for success or ValidationError for invalid inputs
   */
  validate(control: AbstractControl): {[key: string]: any} | null {
    return persianLettersValidator(this.options)(control);
  }
}
