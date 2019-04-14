/*
 * Public API Surface of ngx-persian
 */




export * from './lib/ngx-persian.module';
export {PersianLetterService} from './lib/Services/persian-letter.service';
export {PersianNumberService} from './lib/Services/persian-number.service';
export {EnNumPipe} from './lib/Pipes/enNum.pipe';
export {FaNumPipe} from './lib/Pipes/faNum.pipe';
export {IRCurrencyPipe} from './lib/Pipes/IRCurrency.pipe';
export {NationalCodePipe} from './lib/Pipes/nationalCode.pipe';
export {JDate} from './lib/JDate/jdate'
export {JalaliDateCalculatorService} from './lib/JDate/jalali-date-calculator.service';
export {JalaliDateValidatorService} from './lib/JDate/jalali-date-validator.service';
export {persianLettersValidator, persianNumbersValidator} from './lib/Validators/persian-validators';
export {PersianNumbersDirective, PersianLetterDirective} from './lib/Validators/persian-directives';
export {MobileCodes, MobilePhoneNumberService, operatorsNames} from './lib/Services/mobile-phone-number.service';
export {NationalCodeService} from './lib/Services/national-code.service';
