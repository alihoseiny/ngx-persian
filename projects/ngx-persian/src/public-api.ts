/*
 * Public API Surface of ngx-persian
 */


export {NgxPersianModule} from './lib/ngx-persian.module';
export {PersianLetterService} from './lib/Services/persian-letter.service';
export {PersianNumberService} from './lib/Services/persian-number.service';
export {JDate} from './lib/JDate/jdate';
export {JalaliDateCalculatorService} from './lib/JDate/jalali-date-calculator.service';
export {JalaliDateValidatorService} from './lib/JDate/jalali-date-validator.service';
export {MobileCodes, MobilePhoneNumberService, operatorsNames} from './lib/Services/mobile-phone-number.service';
export {NationalCodeService} from './lib/Services/national-code.service';
export {PersianLetterDirective, PersianNumbersDirective} from './lib/Validators/persian-directives';
export {FaNumPipe} from './lib/Pipes/faNum.pipe'
export {EnNumPipe} from './lib/Pipes/enNum.pipe'
export {IRCurrencyPipe, IRCurrencies} from './lib/Pipes/IRCurrency.pipe'
export {NationalCodePipe} from './lib/Pipes/nationalCode.pipe'
export {JdatePipe} from './lib/Pipes/jdate.pipe'
