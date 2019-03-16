import { Injectable } from '@angular/core';
import {PersianService} from './persian-service';
import {PersianNumberService} from './persian-number.service';

/**
 * isPersian options parameter object should implement this interface. Fields descriptions are in the isPersian method document.
 */
export interface PLOptions {
  persianDigits?: boolean;
  enDigits?: boolean;
  symbols?: boolean;
  whitespaces?: boolean;
}

@Injectable({
  providedIn: 'root'
})
/**
 * This service brings validation of persian texts to the program and let you convert some not-persian letters with persian ones.
 *
 */
export class PersianLetterService implements PersianService {

  static PERSIAN_LETTERS_PATTERN = '\u06A9\u06AF\u06C0\u06CC\u060C\u062A\u062B\u062C\u062D\u062E\u062F\u063A\u064A\u064B\u064C' +
                                       '\u064D\u064E\u064F\u067E\u0670\u0686\u0698\u200C\u0621-\u0629\u0630-\u0639\u0641-\u0654';
  private static SYMBOLS_PATTERN = '؟$-/:-?،{-~!"^_`\\[\\]';
  static WHITESPACES_PATTERN = '\\s';

  /**
   * According to the options values, returns a RegExp object. The regex pattern of it contains regex of finding each of
   * elements those specified in the options object plus persian letters.
   * @return a RegExp object that can use in searching a string for special characters (persian letters and others specified in the options)
   * @param options
   * @private
   */
  private static _stringValidationRegex(options: PLOptions): RegExp {
    let result = '';
    if (options.enDigits) { result += '0-9'; }
    if (options.symbols) { result += PersianLetterService.SYMBOLS_PATTERN; }
    if (options.whitespaces) { result += PersianLetterService.WHITESPACES_PATTERN; }
    if (options.persianDigits) { result += PersianNumberService.persianNumberPattern; }
    // language=JSRegexp
    return new RegExp(`[${result + PersianLetterService.PERSIAN_LETTERS_PATTERN}]`, 'g');
  }

  /**
   * This method gets regex of persian letters and other chars specified in the options and then splits the input value by that regex.
   * If match result is null - there is no match - returns 0. otherwise returns length of the match array that shows number of matched
   * occurred in the input value.
   * @param value
   * @param options
   * @return a number greater equal to 0 representing number of matches occurred in the input value.
   * @private
   */
  private static _getMatchedPatternLength(value: string, options: PLOptions): number {
    const matchResult = value.match(PersianLetterService._stringValidationRegex(options));
    return matchResult ? matchResult.length : 0;
  }

  /**
   * If input value contains any persian letter or is an empty string, returns true. otherwise returns false.
   * @param value
   */
  containsPersian(value: string): boolean {
    if (value === undefined || value === null) { return false; }
    // language=JSRegexp
    const persianRegex = new RegExp(`[${PersianLetterService.PERSIAN_LETTERS_PATTERN}]`);
    return value.trim() ? persianRegex.test(value) : true;
  }

  /**
   * Checks if input value is a persian text or not. If input value contains any letter that is not persian, the output will be false.
   * Result of validation on existence  of other characters controls by options parameter.
   * @param value
   * @param options controlling validation result on existence  of other characters controls by options parameter. Fields:
   *        persianDigits: if sets to true, validation result will be true if input value contains persian digits plus persian letters
   *        enDigits: if sets to true, validation result will be true if input value contains english digits plus persian letters
   *        symbols: if sets to true, validation result will be true if input value contains specific symbols plus persian letters.
   *                 symbols list: ?$-/:؟!~"'^_-[]{}()%&*><;
   *        whitespaces: if sets to true, validation result will be true if input value contains white spaces plus persian letters
   * You can combine any number of options field together.
   */
  isPersian(value: string, options: PLOptions = {
                                                  persianDigits: false,
                                                  enDigits: false,
                                                  symbols: true,
                                                  whitespaces: true}): boolean {
    if (value === undefined || value === null) { return false; }
    return value.length === PersianLetterService._getMatchedPatternLength(value, options);
  }

  /**
   * Converts arabic letters: ي and ك to persian corresponding letters.
   * @param value
   */
  toPersian(value: string): string {
    return value.replace(/ي/g, 'ی').replace(/ك/g, 'ک');
  }

}
