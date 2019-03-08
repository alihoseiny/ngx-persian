import { Injectable } from '@angular/core';
import {PersianService} from './persian-service';
import {InvalidServiceInputError} from './InvalidServiceInput.error';

@Injectable({
  providedIn: 'root'
})
export class PersianNumberService implements PersianService {
  private static persianNumberRegex = '[\u06F0-\u06F9]';
  private static enRegex = new RegExp('[0-9]+');
  private static persianRegex = new RegExp(PersianNumberService.persianNumberRegex);
  private static persianNumbersTable = ['\u06F0', '\u06F1', '\u06F2', '\u06F3', '\u06F4', '\u06F5', '\u06F6', '\u06F7', '\u06F8', '\u06F9'];
  private static englishNumbersTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  contains_persian(value: string): boolean {
    if (!value) { return false; }
    return PersianNumberService.persianRegex.test(value);
  }

  is_persian(value: string): boolean {
    if (!value) {return false; }
    return !PersianNumberService.enRegex.test(value) && this.contains_persian(value);
  }

  to_persian(value: string | number): string {
    if (value === undefined || value === null) {throw new InvalidServiceInputError(); }
    value = value.toString();
    let regex: RegExp;
    for (let i = 0; i < PersianNumberService.persianNumbersTable.length; i++) {
      regex = new RegExp(`[${PersianNumberService.englishNumbersTable[i]}]`, 'g');
      value = value.replace(regex, PersianNumberService.persianNumbersTable[i]);
    }
    return value;
  }

  to_english(value: string): string {
    if (value === undefined || value === null) { throw new InvalidServiceInputError(); }
    let regex: RegExp;
    for (let i = 0; i < PersianNumberService.englishNumbersTable.length; i++) {
      regex = new RegExp(`[${PersianNumberService.persianNumbersTable[i]}]`, 'g');
      value = value.replace(regex, PersianNumberService.englishNumbersTable[i]);
    }
    return value;
  }
}
