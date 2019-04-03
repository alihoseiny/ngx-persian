import { Injectable } from '@angular/core';
import {InvalidNationalCodeError} from './InvalidNationalCode.error';

@Injectable({
  providedIn: 'root'
})
export class NationalCodeService {

  /**
   * This method adds zero character at the beginning of the input until the length of the result reach to 10.
   * ATTENTION: This method doesn't any validation about correctness of the input if it has correct length (between 8 and 10).
   * @param nationalCode a number with at most 10 digits or a string with at most 10 character.
   * @return a string with length equal to 10.
   * @throws InvalidNationalCodeError when length of the input value is greater than 10.
   */
  normalize(nationalCode: number | string): string {
    if (! nationalCode) { throw new InvalidNationalCodeError(); }
    nationalCode = nationalCode.toString();
    const nationalCodeLength = nationalCode.length;
    if (nationalCodeLength > 10 || nationalCodeLength < 8) { throw new InvalidNationalCodeError(nationalCode); }
    return '0'.repeat(10 - nationalCodeLength) + nationalCode;
  }
}
