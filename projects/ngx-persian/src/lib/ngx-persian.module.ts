import { NgModule } from '@angular/core';
import {PersianLetterDirective, PersianNumbersDirective} from './Validators/persian-directives';
import {FaNumPipe} from './Pipes/faNum.pipe';
import {EnNumPipe} from './Pipes/enNum.pipe';
import {IRCurrencyPipe} from './Pipes/IRCurrency.pipe';
import {NationalCodePipe} from './Pipes/nationalCode.pipe';

@NgModule({
  declarations: [PersianLetterDirective, PersianNumbersDirective, FaNumPipe, EnNumPipe, IRCurrencyPipe, NationalCodePipe],
  imports: [],
  exports: [PersianLetterDirective, PersianNumbersDirective, FaNumPipe, EnNumPipe, IRCurrencyPipe, NationalCodePipe]
})
export class NgxPersianModule { }
