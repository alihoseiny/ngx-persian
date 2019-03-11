import { TestBed } from '@angular/core/testing';

import { PersianLetterService } from './persian-letter.service';

describe('PersianLetterService', () => {
  let persianLetterService: PersianLetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    persianLetterService = new PersianLetterService();
  });

  it('should be created', () => {
    const service: PersianLetterService = TestBed.get(PersianLetterService);
    expect(service).toBeTruthy();
  });

  describe('contains_persian', () => {
    it ('Should return false when input is undefined', () => {
        expect(persianLetterService.contains_persian(undefined)).toBeFalsy();
    });

    it ('Should return false when input is null', () => {
        expect(persianLetterService.contains_persian(null)).toBeFalsy();
    });

    [
      'A completely english string.',
      '1234567',
      'En words with 454656464',
      '۰۹۸۷۶۵۳۲۱'
    ].forEach(input => {
      it(`should return false when input (${input}) does not contain any persian letter.`, () => {
        expect(persianLetterService.contains_persian(input)).toBeFalsy();
      });
    });

    [
      'A compسletely english string.',
      '1234567ل',
      '     En words with 45ی4656464',
      '۱۲۳۴۵۶۷۸۷بباب',
      'یک متن فارسی',
      '',
      '\t  '
    ].forEach(input => {
      it(`should return true when input (${input}) contains at least one persian letter.`, () => {
        expect(persianLetterService.contains_persian(input)).toBeTruthy();
      });
    });

  });

  describe('is_persian', () => {
    it ('Should return false when input is undefined', () => {
        expect(persianLetterService.is_persian(undefined)).toBeFalsy();
    });

    it ('Should return false when input is null', () => {
        expect(persianLetterService.is_persian(null)).toBeFalsy();
    });

    [
      'abcd ',
      ' AEES B C D.',
      'متن فارسی با یک h انگلیسی',
      '۰۹۸۷۷۶۵۶۴۶۵',
      'English letters with ۶۸ ۸۶۶ numbers'
    ].forEach(input => {
      it(`should return false when input ${input} has character[s] that[those] are not a persian letter, whitespace or symbol `, () => {
        const options = {
          persianDigits: false,
          enDigits: false,
          symbols: true,
          whitespaces:  true
        };
        expect(persianLetterService.is_persian(input, options)).toBeFalsy();
      });
    });

    [
      'متن دارای فاصله',
      'متن۱۲۳',
      'سیبشسلب5یسبل',
      'سلام.'
    ].forEach(input => {
      it(`should return false when only letters allowed and input (${input}) contains any character except persian letters`, () => {
        const options = {
          persianDigits: false,
          enDigits: false,
          symbols: false,
          whitespaces:  false
        };
        expect(persianLetterService.is_persian(input, options)).toBeFalsy();
      });
    });

    it('should return true when only persian letters allowed and input contains only persian letters.', () => {
      const options = {
        persianDigits: false,
        enDigits: false,
        symbols: false,
        whitespaces:  false
      };
      expect(persianLetterService.is_persian('متنفارسیبدونفاصله', options)).toBeTruthy();
    });

    it('should return true when persian letters and symbols allowed and input contains only them.', () => {
      const options = {
        persianDigits: false,
        enDigits: false,
        symbols: true,
        whitespaces:  false
      };
      expect(persianLetterService.is_persian('فارسی؟!.،', options)).toBeTruthy();
    });

    it('should return true when persian letters and whitespaces allowed and input only contains them', () => {
      const options = {
        persianDigits: false,
        enDigits: false,
        symbols: false,
        whitespaces:  true
      };
      expect(persianLetterService.is_persian('متن فارسی', options)).toBeTruthy();
    });

    it('should return true when persian letters and digits allowed and input only contains them', () => {
      const options = {
        persianDigits: true,
        enDigits: false,
        symbols: false,
        whitespaces:  false
      };
      expect(persianLetterService.is_persian('متن۱۲۵فارسی۷۸۶۴۵', options)).toBeTruthy();
    });

    it('should return true when persian letters and english digits allowed and input only contains them', () => {
      const options = {
        persianDigits: false,
        enDigits: true,
        symbols: false,
        whitespaces:  false
      };
      expect(persianLetterService.is_persian('متن6576854ارسی04358349858767', options)).toBeTruthy();
    });

  });

  describe('to_persian', () => {
    [
      ['متني با ي های عربي', 'متنی با ی های عربی'],
      ['متنی كه ك های آن عربی اند', 'متنی که ک های آن عربی اند'],
      ['متني كه هم ك هاي آن و هم ي هاي آن عربي اند', 'متنی که هم ک های آن و هم ی های آن عربی اند'],
      ['ترکیبی از ك و ي عربي و فارسی', 'ترکیبی از ک و ی عربی و فارسی']
    ].forEach(([input, expectedOutput]) => {
      it(`should replace arabic letters to the text and return ${expectedOutput} instead of ${input}`, () => {
        expect(persianLetterService.to_persian(input)).toBe(expectedOutput);
      });
    });
  });
});
