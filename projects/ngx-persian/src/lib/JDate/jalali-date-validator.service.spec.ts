import { JalaliDateValidatorService } from './jalali-date-validator.service';
import {InvalidJalaliDateError} from './InvalidJalaliDate.error';

describe('JalaliDateValidatorService', () => {
  let jalaliDateValidatorService: JalaliDateValidatorService;
  beforeEach(() => {
    jalaliDateValidatorService = new JalaliDateValidatorService();
  });

  describe('isValidJDate', () => {

    [
      [4500, 1, 1],
      [-300, 1, 1],
      [1397, 12, 1],
      [1310, -1, 30],
      [1375, 12, 31],
      [1380, 1, 0],
      [1366, 7, 31],
      [1397, 12, -29]
    ].forEach(([jYear, jMonth, jDay]) => {
      it(`should return false when input date (${jYear},${jMonth},${jDay}) is not a valid jalali date`, () => {
        expect(jalaliDateValidatorService.isValidJDate(jYear, jMonth, jDay)).toBeFalsy();
      });
    });

  });


  describe('isValidJDay', () => {
    [
      [1375, 11, 30],
      [1385, 0, 31],
      [1380, 0, 1],
      [1393, 5, 31],
      [1400, 6, 30],
      [1397, 11, 29],
    ].forEach(([jYear, jMonth, jDay]) => {
      it(`should return true when number of day (${jDay}) is valid in the given date: (${jYear},${jMonth},${jDay})`, () => {
        expect(jalaliDateValidatorService.isValidJDay(jYear, jMonth, jDay)).toBeTruthy();
      });
    });

    [
      [1375, 11, -30],
      [1385, 0, 0],
      [1380, 0, 32],
    ].forEach(([jYear, jMonth, jDay]) => {
      it(`should return false when number of day (${jDay}) is invalid in the given date: (${jYear},${jMonth},${jDay})`, () => {
        expect(jalaliDateValidatorService.isValidJDay(jYear, jMonth, jDay)).toBeFalsy();
      });
    });

  });

  describe('isValidJMonth', () => {
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach(month => {
      it(`should return true when month value (${month}) is in valid range (0..11) and startFromZero parameter sets to true.`, () => {
        expect(jalaliDateValidatorService.isValidJMonth(month)).toBeTruthy();
      });
    });

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach(month => {
      it(`should return true when month value (${month}) is in valid range (1..12) and startFromZero parameter sets to false.`, () => {
        expect(jalaliDateValidatorService.isValidJMonth(month, false)).toBeTruthy();
      });
    });

    [
      [0, false],
      [12, true],
      [-1, false],
      [-1, true],
    ].forEach(([month, startFromZero]) => {
      it(`should return false when month value (${month}) is not in valid range of startFromZero = ${startFromZero}`, () => {
        // @ts-ignore
        expect(jalaliDateValidatorService.isValidJMonth(month, startFromZero)).toBeFalsy();
      });
    });

  });

  describe('isValidJYear', () => {
    [-70, 4000].forEach(input => {
      it(`should return false when input (${input}) is out of acceptable range`, () => {
        expect(jalaliDateValidatorService.isValidJYear(input)).toBeFalsy();
      });
    });
  });

  describe('jMonthLength', () => {
    [
      [1397, 0, 31],
      [1397, 1, 31],
      [1397, 2, 31],
      [1397, 3, 31],
      [1397, 4, 31],
      [1397, 5, 31],
      [1397, 6, 30],
      [1397, 7, 30],
      [1397, 8, 30],
      [1397, 9, 30],
      [1397, 10, 30],
      [1397, 11, 29],
      [1375, 11, 30]
    ].forEach(([jYear, jMonth, expectedOutput]) => {
      it(`should return the length of ${jMonth}th month of ${jYear} year equal to ${expectedOutput}`, () => {
        expect(jalaliDateValidatorService.jMonthLength(jYear, jMonth)).toBe(expectedOutput);
      });
    });
  });

  describe('numOfJLeapYears', () => {
    [
      [1397, 340],
      [1390, 338],
      [1400, 341],
      [1300, 316],
      [1375, 334],
      [1391, 338],
    ].forEach(([input, expectedOutput]) => {
      it(`should return number of passed jalali leap years from AD 621 until input year.
                     numOfJLeapYears(${input}) === ${expectedOutput}`, () => {
        expect(jalaliDateValidatorService.numOfJLeapYears(input)).toBe(expectedOutput);
      });
    });

    [-62, 3178].forEach(input => {
      it(`should throw InvalidJalaliDate error when inputted jalali year (${input}) is not in the correct range.`, () => {
        expect(() => {
          jalaliDateValidatorService.numOfJLeapYears(input);
        }).toThrow(new InvalidJalaliDateError());
      });
    });
  });

  describe('isJYearLeap', () => {
    [1391, 1395, 1399, 1387, 1383, 1375].forEach(input => {
      it(`should return true when input year (${input}) is leap.`, () => {
        expect(jalaliDateValidatorService.isJYearLeap(input)).toBeTruthy();
      });
    });
  });

});
