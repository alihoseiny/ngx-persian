import { TestBed } from '@angular/core/testing';

import { PersianNumberService } from './persian-number.service';
import {InvalidServiceInputError} from './InvalidServiceInput.error';

describe('PersianNumberService', () => {
  let persianNumberService: PersianNumberService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    persianNumberService = new PersianNumberService();
  });

  it('should be created', () => {
    const service: PersianNumberService = TestBed.get(PersianNumberService);
    expect(service).toBeTruthy();
  });

  describe('contains_persian', () => {

    it('should return false when input is undefined.', () => {
      expect(persianNumberService.contains_persian(undefined)).toBeFalsy();
    });

    it('should return false when input is null', () => {
      expect(persianNumberService.contains_persian(null)).toBeFalsy();
    });

    it('should return false when input is an empty string', () => {
      expect(persianNumberService.contains_persian('')).toBeFalsy();
    });

    [
      '123',
      '   9878 484 \t00',
      'some english text',
      'متن فارسی',
      'dsf 54fd0dsf45',
      '46468متن8787نوش ته'
    ].forEach(input => {
      it(`should return false when input (${input}) doesn't contain any persian number`, () => {
        expect(persianNumberService.contains_persian(input)).toBeFalsy();
      });
    });

    [
      '۱۲۳۴۵۹۷۶۰',
      '   ۰۹۷۷۷۷۷ ۳\t۰۳',
      'سبی۰۸ا۲۳۴م',
      '   یک متن ۶ فارسی بلند',
      'A   Lon۲g english text '
    ].forEach(input => {
      it(`should return true when input (${input}) contains any persian number`, () => {
        expect(persianNumberService.contains_persian(input)).toBeTruthy();
      });
    });

  });

  describe('is_persian', () => {
    it('should return false if input value is undefined', () => {
      expect(persianNumberService.is_persian(undefined)).toBeFalsy();
    });

    it('should return false if input value is null', () => {
      expect(persianNumberService.is_persian(null)).toBeFalsy();
    });

    it('should return false when inputs is an empty string', () => {
      expect(persianNumberService.is_persian('')).toBeFalsy();
    });

    [
      '123456',
      '\t321 01   ',
      '۱۲۳4۵۶',
      '1245۸۹۶21۰',
      'Just english text',
      'تنها حروف فارسی'
    ].forEach((input) => {
      it(`should return false when input string (${input}) containing any english number`, () => {
        expect(persianNumberService.is_persian(input)).toBeFalsy();
      });
    });

    [
      '   ۱۲۳ ۴ ',
      '۸۷۶۹۵some en te x۳t۴',
      '۲۳۴۶۷۸۹۰۹۸۷۶۳۲۱',
      '۸۴۸۴سلام ۹۸۰۰۰۰۰۰'
    ].forEach(input => {
      it(`should return true when all numeric characters in the input (${input}) are persian`, () => {
        expect(persianNumberService.is_persian(input)).toBeTruthy();
      });
    });

  });

  describe('arabic_to_persian', () => {
    [
      ['315٤', '315۴'],
      ['٤٥٦', '۴۵۶'],
      ['۸۷۶٥٥٥۲۳۴۳٦۶٤۴٤', '۸۷۶۵۵۵۲۳۴۳۶۶۴۴۴']
    ].forEach(([input, expectedOutput]) => {
      it(`should replace arabic numbers to the persian ones and change ${input} to the ${expectedOutput}`, () => {
        expect(persianNumberService.arabic_to_persian(input)).toBe(expectedOutput);
      });
    });

    });

  describe('to_persian', () => {
    it('should throw InvalidServiceInputError when input value is undefined', () => {
      expect(() => {
        persianNumberService.to_persian(undefined);
      }).toThrow(new InvalidServiceInputError());
    });

    it('should throw InvalidServiceInputError when input value is null', () => {
      expect(() => {
        persianNumberService.to_persian(null);
      }).toThrow(new InvalidServiceInputError());
    });

    [
      ['123456', '۱۲۳۴۵۶'],
      ['  110   8989\t', '  ۱۱۰   ۸۹۸۹\t'],
      [' En00 words 87856 4', ' En۰۰ words ۸۷۸۵۶ ۴'],
      ['نوشته‌های فارسی با 564 56464 اعداد 22 انگلیسی', 'نوشته‌های فارسی با ۵۶۴ ۵۶۴۶۴ اعداد ۲۲ انگلیسی'],
      ['۳۲۴۵۵۶۷۶۷', '۳۲۴۵۵۶۷۶۷'],
      ['english words with ۴۳۵۹۷۳۷۶ persian numbers', 'english words with ۴۳۵۹۷۳۷۶ persian numbers'],
      ['متن فارسی با اعداد ۹۸۷ فارسی۰۰۰۰', 'متن فارسی با اعداد ۹۸۷ فارسی۰۰۰۰'],
      ['A string without any number', 'A string without any number'],
      ['یک متن بدون هیچ عددی', 'یک متن بدون هیچ عددی'],
      [123456, '۱۲۳۴۵۶'],
      ['', '']
    ].forEach(([input, output]) => {
      it(`should replace all en numbers in input value to persian ones. input: ${input}, output: ${output} `, () => {
        // Ignores typescript error on type of the output variable
        // @ts-ignore
        expect(persianNumberService.to_persian(input)).toBe(output);
      });
    });

  });

  describe('to_english', () => {
    it('should throw InvalidServiceInputError when input value is undefined', () => {
      expect(() => {
        persianNumberService.to_english(undefined);
      }).toThrow(new InvalidServiceInputError());
    });

    it('should throw InvalidServiceInputError when input value is null', () => {
      expect(() => {
        persianNumberService.to_english(null);
      }).toThrow(new InvalidServiceInputError());
    });

    [
      ['123456', '۱۲۳۴۵۶'],
      ['  110   8989\t', '  ۱۱۰   ۸۹۸۹\t'],
      [' En00 words 87856 4', ' En۰۰ words ۸۷۸۵۶ ۴'],
      ['نوشته‌های فارسی با 564 56464 اعداد 22 انگلیسی', 'نوشته‌های فارسی با ۵۶۴ ۵۶۴۶۴ اعداد ۲۲ انگلیسی'],
      ['324556767', '324556767'],
      ['english words with 43597376 english numbers', 'english words with 43597376 english numbers'],
      ['متن فارسی با اعداد 987 انگلیسی0000', 'متن فارسی با اعداد 987 انگلیسی0000'],
      ['A string without any number', 'A string without any number'],
      ['یک متن بدون هیچ عددی', 'یک متن بدون هیچ عددی'],
      ['', '']
    ].forEach(([output, input]) => {
      it(`should replace all en numbers in input value to persian ones. input: ${input}, output: ${output} `, () => {
        expect(persianNumberService.to_english(input)).toBe(output);
      });
    });

  });
});
