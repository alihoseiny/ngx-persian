import { Injectable } from '@angular/core';
import {InvalidMobilePhoneNumberError} from './InvalidMobilePhoneNumber.error';
import {InvalidMobileOperatorError} from './InvalidMobileOperator.error';

/**
 * English name of mobile operators are enum keys and persian name of them are values.
 * All characters of all of the keys are in lowercase
 */
export enum operatorsNames {
  irancell = 'ایرانسل',
  mci = 'همراه اول',
  talia = 'تالیا',
  rightel = 'رایتل',
  spadan = 'اسپادان',
  tkc = 'شبکه مستقل تلفن همراه کیش',
  shatel = 'شاتل',
  aptel = 'آپتل',
  azartel = 'آذرتل',
  samantel = 'سامانتل',
  lotustel = 'لوتوس‌تل',
  anarestan = 'انارستان'
}

/**
 * A constant object. Keys are Mobile operator names and values are arrays those keep mobile codes.
 */
export const MobileCodes = {
  irancell: ['0901', '0902', '0903', '0904', '0905', '0930', '0933', '0935', '0936', '0937', '0938', '0939', '0941'],
  mci: ['0910', '0911', '0912', '0913', '0914', '0915', '0916', '0917', '0918', '0919', '0990', '0991', '0992'],
  talia: ['0932'],
  rightel: ['0920', '0921', '0922'],
  spadan: ['0931'],
  tkc: ['0934'],
  shatel: ['099810', '099811', '099812'],
  aptel: ['099910', '099911', '099913'],
  azartel: ['099914'],
  samantel: ['099996', '099997', '099998', '099999'],
  lotustel: ['09990'],
  anarestan: ['09944']
};

/**
 * This service using for validating phone numbers sold by Iranian Mobile operators.
 *
 * You can get operator name and validation result of a phone number by methods of this service.
 */
@Injectable({
  providedIn: 'root'
})
export class MobilePhoneNumberService {

  /**
   * This method only checks if phoneNumber follows valid pattern. means starting by +98 or 0, then a 9 digit and then 9 digits.
   * This method will not check validity of the phoneNumber code and can accept invalid strings those only locking like phone numbers and
   * in reality are not a valid phone number.
   * @link isValidPhoneNumber
   * @param phoneNumber Digits in this string should be english digits.
   */
  isPhoneNumberPatternValid(phoneNumber: string): boolean {
    const generalRegex = new RegExp(/^((\+98|0)9\d{9})$/);
    return generalRegex.test(phoneNumber);
  }

  /**
   * Removes +98 from the phoneNumber and replaces it with a 0 character.
   * @param phoneNumber Digits in this string should be english digits.
   */
  normalizePhoneNumber(phoneNumber: string): string {
    return phoneNumber.replace('+98', '0');
  }

  /**
   * Checks all codes of all operators in MobileCodes object. IF finds a matched code, returns persian or english name of that operator from
   * operatorsNames enum.
   * @return operator name in english or persian according to the nameInEnglish parameter
   * @throws InvalidMobileOperatorError if pattern is correct but operator code is not valid.
   * @throws InvalidMobilePhoneNumberError If pattern is not correct
   * @param phoneNumber Digits in this string should be english digits.
   * @param nameInEnglish if true, operator name will return in English. if false operator name will return in persian
   * @link MobileCodes
   * @link operatorsNames
   */
  getPhoneNumberOperator(phoneNumber: string, nameInEnglish: boolean = false): string {
    if (!this.isPhoneNumberPatternValid(phoneNumber)) { throw new InvalidMobilePhoneNumberError(); }
    phoneNumber = this.normalizePhoneNumber(phoneNumber);
    for (const operator of Object.keys(MobileCodes)) {
      for (const code of MobileCodes[operator]) {
        if (phoneNumber.indexOf(code) === 0) {
          return nameInEnglish ? operator : operatorsNames[operator];
        }
      }
    }
    throw new InvalidMobileOperatorError();
  }

  /**
   * @return If phoneNumber follows correct pattern and has valid operator, return true. Otherwise returns false.
   * @param phoneNumber Digits in this string should be english digits.
   * @link getPhoneNumberOperator
   */
  isValidPhoneNumber(phoneNumber: string): boolean {
    try {
      this.getPhoneNumberOperator(phoneNumber);
      return true;
    } catch (e) {
      return false;
    }
  }
}
