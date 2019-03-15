import {JalaliDateCalculatorService} from './jalali-date-calculator.service';
import {InvalidJalaliDateError} from './InvalidJalaliDate.error';

/**
 * UTC methods are not implemented for Jalali date. They working directly on gDate object (Corresponding date in Georgian) and changing
 * properties of this. Then new JDate object will create from the modified Georgian Date. So they may Cause unpredictable behaviour.
 * Please don't use UTC methods with "todo" tag on them unless you are sure about the behaviour.
 * Recreating objects are safer than working with UTC methods.
 */
export class JDate implements Date{

  private static EN_MONTHS = ['Farvardin', 'Ordibehesht', 'Khordad', 'Tir', 'Mordad', 'Shahrivar', 'Mehr', 'Aban', 'Azar', 'Dey', 'Behman', 'Esfand'];
  private static FA_MONTHS = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

  private _gDate: Date;
  private _jYear: number;
  private _jMonth: number;
  private _jDay: number;

  public static zeroPadding(value: number | string, desiredLength): string {
    value = value.toString();
    while (value.length < desiredLength) {
      value = '0' + value;
    }
    return value;
  }

  public static parse(dateString: string, calculator: JalaliDateCalculatorService = new JalaliDateCalculatorService()): number {
    const dateArray = dateString.split(' ');
    if (dateArray.length < 3) { throw new InvalidJalaliDateError(); }
    const day = parseInt(dateArray[0]);
    let month = JDate.FA_MONTHS.indexOf(dateArray[1]);
    if (month === -1) { month = JDate.EN_MONTHS.indexOf(dateArray[1]); }
    if (month === -1) { throw new InvalidJalaliDateError(); }
    const year = parseInt(dateArray[2]);
    const timeArray = dateArray.length > 3 ? dateArray[3].split(':') : ['0', '0', '0'];
    const hour = parseInt(timeArray[0]);
    const min = parseInt(timeArray[1]);
    const sec = parseInt(timeArray[2]);
    const gDate = calculator.convertToGeorgian(year, month, day);
    gDate.setHours(hour, min, sec);
    return gDate.getTime();
  }


  constructor(jYear?: number | string | Date, jMonth?: number, jDay?: number, hours: number = 0, minutes: number = 0,
              seconds: number = 0, milliseconds: number = 0, private calculator: JalaliDateCalculatorService = new JalaliDateCalculatorService()) {
    if (!jYear) {
      this._createFromDate(new Date());
    } else if (typeof jYear === 'string' && jMonth === undefined) {
      this._createFromDate(new Date(JDate.parse(jYear)));
    } else if (typeof jYear === 'number' && jMonth === undefined) {
      this._createFromDate(new Date(jYear));
    } else if (jYear instanceof Date && jMonth === undefined) {
      this._createFromDate(jYear);
    }
    else {
      // @ts-ignore
      this._gDate = this.calculator.convertToGeorgian(jYear, jMonth, jDay);
      // @ts-ignore
      this._jYear = jYear;
      this._jMonth = jMonth;
      this._jDay = jDay;
      this._gDate.setHours(hours, minutes, seconds, milliseconds);
    }
    this._check_date_validity();
  }

  /**
   * This method recalculates the gDate value with private attributes those storing Jalali date parts.
   * @private
   */
  private _renewGDate(): void {
    console.debug(`${this._jYear} ${this._jMonth} ${this._jDay}`);
    this._gDate = this.calculator.convertToGeorgian(this._jYear, this._jMonth, this._jDay);
  }

  /**
   * Sets Jalali year value to the input parameter and recalculates gDate attribute.
   * @param value full Jalali year like 1397
   */
  private set jYear(value: number) {
    this._jYear = value;
    this._check_date_validity();
    this._renewGDate();
  }

  /**
   * Sets Jalali month value to the input parameter and recalculates gDate attribute.
   * @param value month number starting from zero
   */
  private set jMonth(value: number) {
    this._jMonth = value;
    this._check_date_validity();
    this._renewGDate();
  }

  /**
   * Sets Jalali day value to the input parameter and recalculates gDate attribute.
   * @param value day number starting from 1.
   */
  private set jDay(value: number) {
    this._jDay = value;
    this._check_date_validity();
    this._renewGDate();
  }

  /**
   * throws InvalidJalaliDateError when date values of this object won't represent a valid Jalali date.
   * @throws InvalidJalaliDateError
   * @private
   */
  private _check_date_validity(): void{
    if (!this.calculator.validator.isValidJDate(this._jYear, this._jMonth, this._jDay)) { throw new InvalidJalaliDateError(); }
  }

  /**
   * Calculates Jalali year from Georgian Date object and sets the attributes of the object to proper values.
   * @param gDate
   * @private
   */
  private _createFromDate(gDate: Date) {
    const conversionResult = this.calculator.convertToJalali(gDate);
    this._jYear = conversionResult.year;
    this._jMonth = conversionResult.month;
    this._jDay = conversionResult.day;
    this._gDate = gDate;
  }

  [Symbol.toPrimitive](hint: "default"): string;

  [Symbol.toPrimitive](hint: "string"): string;

  [Symbol.toPrimitive](hint: "number"): number;

  [Symbol.toPrimitive](hint: string): string | number;

  [Symbol.toPrimitive](hint: "default" | "string" | "number" | string): string | number {
    return undefined;
  }

  /**
   * returns the day of the month for the specified date according to local time.
   */
  getDate(): number {
    return this._jDay;
  }

  /**
   *  returns the day of the week for the specified date according to local time, where 0 represents Friday and 6 is Thursday.
   */
  getDay(): number {
    return (this._gDate.getDay() + 2) % 7;
  }

  /**
   * Returns the year (4 digits for 4-digit years) of the specified date according to local time
   */
  getFullYear(): number {
    return this._jYear;
  }

  /**
   * Returns the hour for the specified date, according to local time.
   */
  getHours(): number {
    return this._gDate.getHours();
  }

  /**
   * Returns the milliseconds in the specified date according to local time.
   */
  getMilliseconds(): number {
    return this._gDate.getMilliseconds();
  }

  /**
   * Returns the minutes in the specified date according to local time.
   */
  getMinutes(): number {
    return this._gDate.getMinutes();
  }

  /**
   * Returns the month in the specified date according to local time, as a zero-based value
   * where zero indicates the first month of the year.
   */
  getMonth(): number {
    return this._jMonth;
  }

  /**
   * Returns the seconds in the specified date according to local time.
   */
  getSeconds(): number {
    return this._gDate.getSeconds();
  }

  /**
   *  Returns the number of milliseconds* since the Unix Epoch.
   * JavaScript uses milliseconds as the unit of measurement, whereas Unix Time is in seconds.
   * getTime() always uses UTC for time representation. For example, a client browser in one timezone, getTime() will be the same as a
   * client browser in any other timezone.
   *You can use this method to help assign a date and time to another Date object. This method is functionally equivalent to the valueOf() method.
   */
  getTime(): number {
    return this._gDate.getTime();
  }

  /**
   * Returns the time zone difference, in minutes, from current locale (host system settings) to UTC
   * Attention: Not implemented
   * @todo add implementation
   */
  getTimezoneOffset(): number {
    return this._gDate.getTimezoneOffset();
  }

  /**
   * Output is not jalali day.
   * @todo add implementation
   */
  getUTCDate(): number {
    return this._gDate.getUTCDate();
  }

  /**
   * Output is not jalali day.
   * @todo add implementation
   */
  getUTCDay(): number {
    return this._gDate.getUTCDay();
  }

  /**
   * Output is not a Jalali Year.
   * @todo add implementation
   */
  getUTCFullYear(): number {
    return this._gDate.getUTCFullYear();
  }

  /**
   * @todo add implementation
   */
  getUTCHours(): number {
    return this._gDate.getUTCHours();
  }

  /**
   * @todo add implementation
   */
  getUTCMilliseconds(): number {
    return this._gDate.getUTCMilliseconds();
  }

  /**
   * @todo add implementation
   */
  getUTCMinutes(): number {
    return this._gDate.getUTCMinutes();
  }

  /**
   * Output is not a Jalali Year.
   * @todo add implementation
   */
  getUTCMonth(): number {
    return this._gDate.getUTCMonth();
  }

  /**
   * @todo add implementation
   */
  getUTCSeconds(): number {
    return this._gDate.getUTCSeconds();
  }

  /**
   * sets the day of the JDate object relative to the beginning of the currently set month.
   * @param date day number starts from 1.
   * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date (the Date object is also changed in place).
   */
  setDate(date: number): number {
    this.jDay = date;
    return this.getTime();
  }

  /**
   * sets the full year for a specified date according to local time. Returns new timestamp.
   * @param year full Jalali year like 1397
   * @param month number of month starting from 0
   * @param date number of day starting from 1
   */
  setFullYear(year: number, month?: number, date?: number): number {
    this.jYear = year;
    if (month) { this.jMonth = month; }
    if (date) {this.jDay = date; }
    return this.getTime();
  }

  /**
   * Sets the hours for a specified date according to local time, and returns the number of milliseconds since
   * January 1, 1970 00:00:00 UTC until the time represented by the updated JDate instance.
   * @param hours An integer between 0 and 23, representing the hour
   * @param min An integer between 0 and 59, representing the minutes.
   * @param sec An integer between 0 and 59, representing the seconds.
   * @param ms A number between 0 and 999, representing the milliseconds.
   * @return The number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.
   */
  setHours(hours: number, min?: number, sec?: number, ms?: number): number {
    this._gDate.setHours(hours);
    if (min !== undefined) { this.setMinutes(min); }
    if (sec !== undefined) { this.setSeconds(sec); }
    if (ms !== undefined) { this.setMilliseconds(ms); }
    return this.getTime();
  }

  /**
   * Sets the milliseconds for a specified date according to local time.
   * @param ms A number between 0 and 999, representing the milliseconds.
   * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
   */
  setMilliseconds(ms: number): number {
    this._gDate.setMilliseconds(ms);
    return this.getTime();
  }

  /**
   * Sets the minutes for a specified date according to local time.
   * @param min An integer between 0 and 59, representing the minutes.
   * @param sec An integer between 0 and 59, representing the seconds.
   * @param ms A number between 0 and 999, representing the milliseconds.
   * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
   */
  setMinutes(min: number, sec?: number, ms?: number): number {
    this._gDate.setMinutes(min);
    if(sec !== undefined) { this.setSeconds(sec); }
    if (ms !== undefined) { this.setMilliseconds(ms); }
    return this.getTime();
  }

  /**
   * Sets the month for a specified date according to the currently set year.
   * @param month An integer between 0 and 11, representing the months Farvardin through Esfand.
   * @param date An integer from 1 to 31, representing the day of the month.
   * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
   */
  setMonth(month: number, date?: number): number {
    this.jMonth = month;
    if (date !== undefined) { this.jDay = date; }
    return this.getTime();
  }

  /**
   * Sets the seconds for a specified date according to local time.
   * @param sec An integer between 0 and 59, representing the seconds.
   * @param ms A number between 0 and 999, representing the milliseconds.
   * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
   */
  setSeconds(sec: number, ms?: number): number {
    this._gDate.setSeconds(sec);
    if (ms !== undefined) { this.setMilliseconds(ms); }
    return this.getTime();
  }

  /**
   * Sets the JDate object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
   * @param time sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
   * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
   */
  setTime(time: number): number {
    this._createFromDate(new Date(time));
    return time;
  }

  /**
   * sets the day of the month for a specified date according to universal time.
   * Then recreate the JDate object from new Georgian object.
   * @param  date An integer from 1 to 31, representing the day of the month.
   * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
   * @todo add implementation
   */
  setUTCDate(date: number): number {
    this._gDate.setUTCDate(date);
    this._createFromDate(this._gDate);
    return this.getTime();
  }

  /**
   * Sets the full year for a specified date according to universal time.
   * Then recreate the JDate object from new Georgian object.
   * @param year  An integer specifying the numeric value of the year, for example, 1995.
   * @param month  Optional. An integer between 0 and 11 representing the months January through December.
   * @param date An integer between 1 and 31 representing the day of the month. If you specify the dayValue parameter, you must also
   * specify the monthValue.
   * @todo add implementation
   */
  setUTCFullYear(year: number, month?: number, date?: number): number {
    this._gDate.setUTCFullYear(year, month, date);
    this._createFromDate(this._gDate);
    return this.getTime();
  }

  /**
   * Sets the hour for a specified date according to universal time, and returns the number of milliseconds since
   * January 1, 1970 00:00:00 UTC until the time represented by the updated Date instance.
   * Then recreate the JDate object from new Georgian object.
   * @param hours  An integer between 0 and 23, representing the hour.
   * @param min Optional. An integer between 0 and 59, representing the minutes.
   * @param sec Optional. An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter,
   *        you must also specify the minutesValue.
   * @param ms Optional. A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter,
   *        you must also specify the minutesValue and secondsValue.
   * @return The number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.
   * @todo add implementation
   */
  setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number {
    this._gDate.setUTCHours(hours, min, sec, ms);
    this._createFromDate(this._gDate);
    return this.getTime();
  }

  /**
   * Sets the milliseconds for a specified date according to universal time.
   * Then recreate the JDate object from new Georgian object.
   * @param ms A number between 0 and 999, representing the milliseconds.
   * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
   * @todo add implementation
   */
  setUTCMilliseconds(ms: number): number {
    this._gDate.setUTCMilliseconds(ms);
    this._createFromDate(this._gDate);
    return this.getTime();
  }

  /**
   * Sets the minutes for a specified date according to universal time.
   * Then recreate the JDate object from new Georgian object.
   * @param min An integer between 0 and 59, representing the minutes.
   * @param sec Optional. An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter,
   *        you must also specify the minutesValue.
   * @param ms Optional. A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter,
   *        you must also specify the minutesValue and secondsValue.
   * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
   * @todo add implementation
   */
  setUTCMinutes(min: number, sec?: number, ms?: number): number {
    this._gDate.setUTCMinutes(min, sec, ms);
    this._createFromDate(this._gDate);
    return this.getTime();
  }

  /**
   * Sets the month for a specified date according to universal time.
   * Then recreate the JDate object from new Georgian object.
   * @param month An integer between 0 and 11, representing the months January through December.
   * @param date Optional. An integer from 1 to 31, representing the day of the month.
   * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
   * @todo add implementation
   */
  setUTCMonth(month: number, date?: number): number {
    this._gDate.setUTCMonth(month, date);
    this._createFromDate(this._gDate);
    return this.getTime();
  }

  /**
   * Sets the seconds for a specified date according to universal time.
   * Then recreate the JDate object from new Georgian object.
   * @param sec An integer between 0 and 59, representing the seconds.
   * @param ms Optional. A number between 0 and 999, representing the milliseconds.
   * @todo add implementation
   */
  setUTCSeconds(sec: number, ms?: number): number {
    this._gDate.setUTCSeconds(sec, ms);
    this._createFromDate(this._gDate);
    return this.getTime();
  }

  toDateString(): string {
    return "";
  }

  toISOString(): string {
    return "";
  }

  toJSON(key?: any): string {
    return "";
  }

  toLocaleDateString(): string;
  toLocaleDateString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
  toLocaleDateString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string {
    return "";
  }

  toLocaleTimeString(): string;
  toLocaleTimeString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
  toLocaleTimeString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string {
    return "";
  }

  toTimeString(): string {
    return "";
  }

  toUTCString(): string {
    return "";
  }

  valueOf(): number {
    return 0;
  }
}
