import { TestBed } from '@angular/core/testing';

import {MobileCodes, MobilePhoneNumberService, operatorsNames} from './mobile-phone-number.service';
import {InvalidMobilePhoneNumberError} from './InvalidMobilePhoneNumber.error';
import {InvalidMobileOperatorError} from './InvalidMobileOperator.error';

describe('MobilePhoneNumberService', () => {
  let mobilePhoneNumberService: MobilePhoneNumberService;
  beforeEach(() => {
    mobilePhoneNumberService = new MobilePhoneNumberService();
  });

  it('should be created', () => {
    const service: MobilePhoneNumberService = TestBed.get(MobilePhoneNumberService);
    expect(service).toBeTruthy();
  });

  describe('isPhoneNumberPatternValid', () => {
    [
      '',
      '0',
      '091239425',
      '989354716587',
      '+98912471658',
      '0989125047963',
    ].forEach(phoneNumber => {
      it(`should return false when input (${phoneNumber}) length is not correct.`, () => {
        expect(mobilePhoneNumberService.isPhoneNumberPatternValid(phoneNumber)).toBeFalsy();
      });
    });


    const baseNumbers = '01234567891';
    for (const operator of Object.keys(MobileCodes)) {  // Looping through operators for getting all codes.
      for (const code of MobileCodes[operator]) {   // Looping through codes for creating all possible phone numbers with
        const number = code + baseNumbers.substring(code.length); // A fake phone number with desired code and correct pattern
        it(`should return true when input number (${number}) is a valid phone number`, () => {
          expect(mobilePhoneNumberService.isPhoneNumberPatternValid(number)).toBeTruthy();
        });
      }
    }

  });

  describe('getPhoneNumberOperator', () => {

    [
      '',
      '0',
      '091239425',
      '989354716587',
      '+98912471658',
      '0989125047963',
    ].forEach(phoneNumber => {
      it(`should throw InvalidMobilePhoneNumber error when input number (${phoneNumber}) does not follow correct pattern`, () => {
        expect(() => {
          mobilePhoneNumberService.getPhoneNumberOperator(phoneNumber);
        }).toThrow(new InvalidMobilePhoneNumberError());
      });
    });


    const baseNumbers = '01234567891';
    for (const operator of Object.keys(MobileCodes)) {  // Looping through operators for getting all codes.
      for (const code of MobileCodes[operator]) {   // Looping through codes for creating all possible phone numbers with
        const number = code + baseNumbers.substring(code.length); // A fake phone number with desired code and correct pattern
        it(`should return operator name in persian when input number (${number}) has a valid code (${code}) at the beginning
                       and nameInEnglish parameter has been set to false`, () => {
          expect(mobilePhoneNumberService.getPhoneNumberOperator(number)).toBe(operatorsNames[operator]);
        });
      }
    }

    for (const operator of Object.keys(MobileCodes)) {  // Looping through operators for getting all codes.
      for (const code of MobileCodes[operator]) {   // Looping through codes for creating all possible phone numbers with
        const number = code + baseNumbers.substring(code.length); // A fake phone number with desired code and correct pattern
        it(`should return operator name in english when input number (${number}) has a valid code (${code}) at the beginning
                       and nameInEnglish parameter has been set to true`, () => {
          expect(mobilePhoneNumberService.getPhoneNumberOperator(number, true)).toBe(operator);
        });
      }
    }

    it('should throw InvalidMobileOperatorError when code is not a valid code for iranina operators.', () => {
      expect(() => {
        mobilePhoneNumberService.getPhoneNumberOperator('09512305974');
      }).toThrow(new InvalidMobileOperatorError());
    });
  });

  describe('normalizePhoneNumber', () => {
    [
      ['+98930145784', '0930145784'],
      ['091658743', '091658743'],
      ['', ''],
    ].forEach(([input, expectedOutput]) => {
      it(`should replace +98 in input (${input}) with 0`, () => {
        expect(mobilePhoneNumberService.normalizePhoneNumber(input)).toBe(expectedOutput);
      });
    });
  });

  describe('isValidPhoneNumber', () => {

    [
      '',
      '0',
      '091239425',
      '989354716587',
      '+98912471658',
      '0989125047963',
      '09623058328',
      '+989623058328'
    ].forEach(phoneNumber => {
      it(`should return false when input value does not follow correct pattern or has no valid operator`, () => {
        expect(mobilePhoneNumberService.isValidPhoneNumber(phoneNumber)).toBeFalsy();
      });
    });

    const baseNumbers = '01234567891';
    for (const operator of Object.keys(MobileCodes)) {  // Looping through operators for getting all codes.
      for (const code of MobileCodes[operator]) {   // Looping through codes for creating all possible phone numbers with
        const number = code + baseNumbers.substring(code.length); // A fake phone number with desired code and correct pattern
        it(`should return true when input number (${number}) has a valid code and follows correct pattern`, () => {
          expect(mobilePhoneNumberService.isValidPhoneNumber(number)).toBeTruthy();
        });
      }
    }

  });

});
