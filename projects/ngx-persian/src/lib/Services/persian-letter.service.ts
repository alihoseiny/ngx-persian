import { Injectable } from '@angular/core';
import {PersianService} from './persian-service';
import {PersianNumberService} from './persian-number.service';

interface Options {
  persianDigits?: boolean;
  enDigits?: boolean;
  symbols?: boolean;
  whitespaces?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PersianLetterService implements PersianService {

  static persianLettersPattern = '\u06A9\u06AF\u06C0\u06CC\u060C\u062A\u062B\u062C\u062D\u062E\u062F\u063A\u064A\u064B\u064C' +
                                       '\u064D\u064E\u064F\u067E\u0670\u0686\u0698\u200C\u0621-\u0629\u0630-\u0639\u0641-\u0654';
  private static symbolsPattern = '؟$-/:-?،{-~!"^_`\\[\\]';
  static whitespacesPattern = '\\s';

  private static _string_validation_regex(options: Options): RegExp {
    let result = '';
    if (options.enDigits) { result += ['0-9']; }
    if (options.symbols) { result += PersianLetterService.symbolsPattern; }
    if (options.whitespaces) { result += PersianLetterService.whitespacesPattern; }
    if (options.persianDigits) { result += PersianNumberService.persianNumberPattern; }
    // language=JSRegexp
    return new RegExp(`[${result + PersianLetterService.persianLettersPattern}]`, 'g');
  }

  private static _get_matched_pattern_length(value: string, options: Options): number {
    const matchResult = value.match(PersianLetterService._string_validation_regex(options));
    return matchResult ? matchResult.length : 0;
  }

  contains_persian(value: string): boolean {
    if (value === undefined || value === null) { return false; }
    // language=JSRegexp
    const persianRegex = new RegExp(`[${PersianLetterService.persianLettersPattern}]`);
    return value.trim() ? persianRegex.test(value) : true;
  }

  is_persian(value: string, options: Options = {
                                                  persianDigits: false,
                                                  enDigits: false,
                                                  symbols: true,
                                                  whitespaces: true}): boolean {
    if (value === undefined || value === null) { return false; }
    return value.length === PersianLetterService._get_matched_pattern_length(value, options);
  }

  to_persian(value: string): string {
    return value.replace(/ي/g, 'ی').replace(/ك/g, 'ک');
  }

}
