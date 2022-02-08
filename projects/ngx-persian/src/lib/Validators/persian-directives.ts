import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {persianLettersValidator, persianNumbersValidator} from './persian-validators';
import {PLOptions} from '../Services/persian-letter.service';


/**
 * You can add PersianNumbersDirective property to your input tag for using persianNumbersValidator function on its value.
 *
 * [For more information also see persianNumbersValidator]{@link persianNumbersValidator}
 */
@Directive({
    selector: '[ngxPersianNumbersDirective]',
    providers: [{provide: NG_VALIDATORS, useExisting: PersianNumbersDirective}]         // eslint-disable-line no-use-before-define
})
export class PersianNumbersDirective implements Validator {

    /**
     * Only a wrapper for persianNumbersValidator validator function.
     *
     * @param control
     * @return null for success or ValidationError for invalid inputs
     */
    validate(control: AbstractControl): { [key: string]: any } | null {
        return persianNumbersValidator()(control);
    }
}

/**
 * You can add PersianLetterDirective property to your input tag for using persianNumbersValidator function on its value
 * For setting options value, you can simply set PersianLetterDirective property equal to the PLOptions object.
 * [For more information also see persianLettersValidator]{@link persianLettersValidator}
 */
@Directive({
    selector: '[ngxPersianLettersValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: PersianLetterDirective}]         // eslint-disable-line no-use-before-define
})
export class PersianLetterDirective implements Validator {

    @Input('PersianLetterDirective') options!: PLOptions;        // eslint-disable-line @angular-eslint/no-input-rename

    /**
     * Only a wrapper for persianLettersValidator validator function.
     *
     * @param control
     * @return null for success or ValidationError for invalid inputs
     */
    validate(control: AbstractControl): { [key: string]: any } | null {
        return persianLettersValidator(this.options)(control);
    }
}
