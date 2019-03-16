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

  validate(control: AbstractControl): {[key: string]: any} | null {
    return persianNumbersValidator()(control);
  }
}

@Directive({
  selector: 'persianLettersValidator',
  providers: [{provide: NG_VALIDATORS, useExisting: PersianLetterDirective}]
})
/**
 * You can add PersianLetterDirective property to your input tag for using persianNumbersValidator function on its value
 * For setting options value, you can simply set PersianLetterDirective property equal to the PLOptions object.
 * @see persianLettersValidator
 */
export class PersianLetterDirective implements Validator {

  @Input('PersianLetterDirective') options: PLOptions;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return persianLettersValidator(this.options)(control);
  }
}
