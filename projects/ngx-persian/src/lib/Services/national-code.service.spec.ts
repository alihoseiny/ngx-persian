import { NationalCodeService } from './national-code.service';
import {InvalidNationalCodeError} from './InvalidNationalCode.error';

describe('NationalCodeService', () => {
  let nationalCodeService: NationalCodeService;
  beforeEach(() => {
    nationalCodeService = new NationalCodeService();
  });

  describe('normalize', () => {
    [
      [123456789, '0123456789'],
      ['123456789', '0123456789'],
      ['0651748962', '0651748962'],
      [15746389, '0015746389'],
      ['15746389', '0015746389'],
    ].forEach(([input, expectedOutput]) => {
      it('should return a string from input value let padded with enough zeros to make the length of the string equal to 10', () => {
        // @ts-ignore
        expect(nationalCodeService.normalize(input)).toBe(expectedOutput);
      });
    });
    [
      12345678901,
      '12345678901',
      4168768454514687868168718542454,
      '4554545454                     12',
      1234567,
      '001234',
      '1',
      37
    ].forEach(input => {
      it('should throw InvalidNationalCodeError when input length is greater than 10 or shorter than 8', () => {
        expect(() => {
          nationalCodeService.normalize(input);
        }).toThrow(new InvalidNationalCodeError(input.toString()));
      });
    });

    it ('Should throw InvalidNationalCodeError when input is undefined', () => {
        expect(() => {
          nationalCodeService.normalize(undefined);
        }).toThrow(new InvalidNationalCodeError());
    });

    it ('Should throw InvalidNationalCodeError when input is null', () => {
      expect(() => {
        nationalCodeService.normalize(null);
      }).toThrow(new InvalidNationalCodeError());
    });

    it ('Should throw InvalidNationalCodeError when input is an empty string', () => {
      expect(() => {
        nationalCodeService.normalize('');
      }).toThrow(new InvalidNationalCodeError());
    });

  });

  describe('isValid', () => {
    it ('Should return false when input is undefined', () => {
        expect(nationalCodeService.isValid(undefined)).toBeFalsy();
    });

    it ('Should return false when input is null', () => {
        expect(nationalCodeService.isValid(null)).toBeFalsy();
    });

    it ('Should return false when input is an empty string', () => {
        expect(nationalCodeService.isValid('')).toBeFalsy();
    });
  });

  [
    1111111111,
    333333333,
    44444444,
    '9999999999',
    '000000000',
    '66666666'
  ].forEach(input => {
    it(`should return false when all digits of the input (${input}) are equal.`, () => {
      expect(nationalCodeService.isValid(input)).toBeFalsy();
    });
  });

  [
    '00234178913',
    1364756,
    1,
    2345678924545445454
  ].forEach(input => {
    it(`should return false when input (${input}) length is not in the valid range.`, () => {
      expect(nationalCodeService.isValid(input)).toBeFalsy();
    });
  });

  [
    '0023417891',
    12364756,
    1234567892,
    234567892,
    7731689951
  ].forEach(input => {
    it(`should return false when input value (${input}) is not a valid national code according to the validation algorithm.`, () => {
      expect(nationalCodeService.isValid(input)).toBeFalsy();
    });
  });

  [
    1234567891,
    '0016245784',
    '236547887',
    2365478824,
    654127859,
    '16245784'
  ].forEach(input => {
    it(`should return true when input (${input}) is a valid national code.`, () => {
      expect(nationalCodeService.isValid(input)).toBeTruthy();
    });
  })

});
