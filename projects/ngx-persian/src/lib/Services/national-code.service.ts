import { Injectable } from '@angular/core';
import {InvalidNationalCodeError} from './InvalidNationalCode.error';

/**
 * For validating Iranian National code (number), you can use this service in your components or every other places using DI or not.
 */
@Injectable({
  providedIn: 'root'
})
export class NationalCodeService {

  /**
   *
   * [We are using for loop instead of match or split because it has better performance according to this link]{@link https://stackoverflow.com/a/46312614/5400597}
   * @return true if all characters of the `input` are equal and input length is greater than 1. Otherwise returns false.
   * @param input
   */
  private _is_repetitive(input: string): boolean {
    if (input.length < 2) { return false; }
    const firstChar = input.charAt(0);
    for (let i = 1; i < input.length; i++) {
      if (input.charAt(i) !== firstChar) { return false; }
    }
    return true;
  }

  /**
   * This method adds zero character at the beginning of the input until the length of the result reach to 10.
   *
   * This method removes spaces from right and left sides of the input.
   *
   * ATTENTION: This method doesn't any validation about correctness of the input if it has correct length (between 8 and 10).
   * @param nationalCode a number with at most 10 digits or a string with at most 10 character.
   * @return a string with length equal to 10.
   * @throws InvalidNationalCodeError when length of the input value is greater than 10.
   */
  normalize(nationalCode: number | string): string {
    if (! nationalCode) { throw new InvalidNationalCodeError(); }
    nationalCode = nationalCode.toString();
    nationalCode = nationalCode.trim();
    const nationalCodeLength = nationalCode.length;
    if (nationalCodeLength > 10 || nationalCodeLength < 8) { throw new InvalidNationalCodeError(nationalCode); }
    return '0'.repeat(10 - nationalCodeLength) + nationalCode;
  }

  /**
   * This method first normalizes the input using `normalize` method and implicitly checks input length, So you DO NOT NEED to
   * normalize input before, but this will not make any bad effect.
   *
   * [Then checking validation of the input using algorithm described in this link]{@link http://www.aliarash.com/article/codemeli/codemeli.htm}
   * @param nationalCode
   */
  isValid(nationalCode: number | string): boolean {
    if (!nationalCode) { return false; }
    nationalCode = nationalCode.toString();
    if (this._is_repetitive(nationalCode)) { return false; }
    try {
      nationalCode = this.normalize(nationalCode); // Normalizing the input and checking input length validation implicitly.
    } catch (e) {
      return false; // Input length is not in the valid range.
    }
    let multiplicationResult = 0;
    for (let i = 0; i < 9; i++) {
      multiplicationResult += parseInt(nationalCode.charAt(i), 10)  * (10 - i);
    }
    const reminder = multiplicationResult % 11;
    const controlNum = parseInt(nationalCode.charAt(9));
    let desiredControlNum =  reminder;
    if (reminder > 1) {
      desiredControlNum = 11 - reminder;
    }
    return desiredControlNum === controlNum;
  }
}
