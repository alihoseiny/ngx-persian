import {Pipe, PipeTransform} from '@angular/core';
import {PersianNumberService} from '../Services/persian-number.service';

@Pipe({name: 'enNum'})
export class EnNumPipe  implements PipeTransform {

  constructor(private persianNumberService: PersianNumberService) {}

  transform(value: string | number) {
    value = String(value);
    return this.persianNumberService.toEnglish(value);
  }
}
