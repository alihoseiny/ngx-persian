import { Pipe, PipeTransform} from '@angular/core';
import {PersianNumberService} from '../Services/persian-number.service';

/**
 * Replaces all arabic and english numbers with persian numbers.
 * @example {{englishTextDigit | faNum}}
 */
@Pipe({name: 'faNum'})
export class FaNumPipe implements PipeTransform {

  constructor(private persianNumberService: PersianNumberService) {}

  /**
   *
   * @param value a number or string (probably empty).
   * @return a string that all english and arabic numbers in the input has been replaced with persian digits.
   */
  transform(value: string | number): string {
    value = String(value);
    return this.persianNumberService.toPersian(value);
  }
}

