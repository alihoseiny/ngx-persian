import {Injectable} from '@angular/core';
import {div, mod} from './ArithmeticUtils';
import {InvalidJalaliDateError} from './InvalidJalaliDate.error';
import {SimpleDateInterface} from './SimpleDate.interface';
import {JalaliDateValidatorService} from './jalali-date-validator.service';

@Injectable({
  providedIn: 'root'
})
export class JalaliDateCalculatorService {

  private readonly _jYear: number;
  private readonly _jMonth: number;
  private readonly _jDay: number;

  constructor(private date?: Date, public validator: JalaliDateValidatorService = new JalaliDateValidatorService(),) {
    if (this.date) {
      const convrtedDate = this.convertToJalali(this.date);
      this._jYear = convrtedDate.year;
      this._jMonth = convrtedDate.month;
      this._jDay = convrtedDate.day;
    }
  }

  get jDay(): number {
    return this._jDay;
  }
  get jMonth(): number {
    return this._jMonth;
  }
  get jYear(): number {
    return this._jYear;
  }

  /**
   * Calculates the Julian Day number from Gregorian or Julian calendar dates.
   * @see https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L195
   * Only some code cleaning applied to the source code.
   * The procedure was tested to be good since 1 March, -100100 (of both calendars) up to a few million years into the future.
   * @param gDate an instance of javascript date representing a Georgian date.
   */
  numberOfPassedGDays(gDate: Date = this.date): number {
    const gMonth = gDate.getMonth() - 7;
    const gYear = gDate.getFullYear() + 100100;
    const gMonthDiv = div(gMonth, 6);
    const result = div((gYear + gMonthDiv) * 1461, 4) + div(153 * mod(gMonth + 17, 12) + 2, 5) + gDate.getDate() - 34840408;
    return result - div(div(gYear + gMonthDiv, 100) * 3, 4) + 752;
  }

  /**
   * Returns number of passed days from source day in jalali calendar to the given jalali date.
   * @param jYear full jalali year like 1397
   * @param jMonth starts from zero
   * @param jDay day number starts from one
   */
  numberOfPassedJDays(jYear: number, jMonth: number, jDay: number): number {
    return this.numberOfPassedGDays(new Date(this.jalaliYearToGeorgianYear(jYear), 2, this.firstDayOfJYearInMarch(jYear))) +
      jMonth * 31 - div(jMonth + 1, 7) * (jMonth - 6) + jDay - 1;
  }

  /**
   * Creates a javascript Date object from number of passed days in Georgian calendar representing Georgian date.
   * @see https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L213
   */
  createGDateFromDays(numOfDays: number): Date {
    const j = (4 * numOfDays + 139361631) + div(div(4 * numOfDays + 183187720, 146097) * 3, 4) * 4 - 3908;
    const i = div(mod(j, 1461), 4) * 5 + 308;
    const gDay = div(mod(i, 153), 5) + 1;
    const gMonth = mod(div(i, 153), 12);
    const gYear = div(j, 1461) - 100100 + div(7 - gMonth, 6);
    return new Date(gYear, gMonth, gDay);
  }

  /**
   * This function returns number of passed leap years from AD 621 until targetGYear.
   * @param targetGYear is full year number like 2018
   * @see https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L110
   */
  numOfGLeapYears(targetGYear: number): number {
    return div(targetGYear, 4) - div((div(targetGYear, 100) + 1) * 3, 4) - 150;
  }

  /**
   * first day of the Farvardin month in Jalali calendar is in March month. This method returns the day number of new jalali year in March.
   * The day number starts from 1 not zero and is equal to the real numbers in the calendar.
   * @param jYear full jalali year like 1397
   */
  firstDayOfJYearInMarch(jYear): number {
    const gYear = jYear + 621;
    return this.validator.numOfJLeapYears(jYear) - this.numOfGLeapYears(gYear) + 20;
  }

  /**
   * Converts jalali year number to the georgian year. Output year is the georgian year that jalali year starts within it, not the year
   * that starts in the winter of jalali year.
   * @param jYear full jalali year like 1397
   */
  jalaliYearToGeorgianYear(jYear: number): number {
    return jYear + 621;
  }

  /**
   * Converts georgian year to the jalali year. Output year is the jalali year that start within the Georgian year.
   * @param gYear full georgian year like 2018
   */
  GeorgianYearToJalaliYear(gYear: number): number {
    return gYear - 621;
  }

  /**
   * this method converts Georgian date to the jalali date. Output is an object implementing SimpleDateInterface.
   * ATTENTION: month number starts from 0, but day number starts from 1. Just like native javascript Date object.
   * @param gDate Georgian date as a javascript Date object.
   * @see https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L149
   */
  convertToJalali(gDate: Date): SimpleDateInterface {
    const georgianYear = gDate.getFullYear();
    let jalaliYear = this.GeorgianYearToJalaliYear(georgianYear);
    const passedDays = this.numberOfPassedGDays(gDate);
    const numOfPassedDaysTo1Farvardin = this.numberOfPassedGDays(new Date(georgianYear, 2, this.firstDayOfJYearInMarch(jalaliYear)));

    let jalaliDay: number;
    let jalaliMonth: number;

    // Find number of days that passed since 1 Farvardin.
    let numOfDayInJYear = passedDays - numOfPassedDaysTo1Farvardin;
    if (numOfDayInJYear >= 0) {
      if (numOfDayInJYear <= 185) {
        // The first 6 months.
        jalaliMonth = div(numOfDayInJYear, 31);
        jalaliDay = mod(numOfDayInJYear, 31) + 1;
        return  {year: jalaliYear, month: jalaliMonth, day: jalaliDay};
      } else {
        // The remaining months.
        numOfDayInJYear -= 186;
      }
    } else {
      // Previous Jalali year.
      jalaliYear -= 1;
      numOfDayInJYear += 179;
      if (this.validator.isJYearLeap(jalaliYear)) {
        numOfDayInJYear += 1;
      }
    }
    jalaliMonth = 6 + div(numOfDayInJYear, 30);
    jalaliDay = mod(numOfDayInJYear, 30) + 1;
    return {year: jalaliYear, month: jalaliMonth, day: jalaliDay};
  }

  /**
   * Converts a valid jalali date to a javascript Date object representing a equivalent Georgian date.
   * @param jYear a full Jalali year like 1397
   * @param jMonth starts from zero
   * @param jDay starts from 1
   * @throws InvalidJalaliDateError when inputted date is not a valid Jalali date.
   */
  convertToGeorgian(jYear: number, jMonth: number, jDay: number): Date {
    if (!this.validator.isValidJDate(jYear, jMonth, jDay)) { throw new InvalidJalaliDateError(); }
    return this.createGDateFromDays(this.numberOfPassedJDays(jYear, jMonth, jDay));
  }

}
