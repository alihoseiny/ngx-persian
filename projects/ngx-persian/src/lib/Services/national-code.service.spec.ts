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


});
