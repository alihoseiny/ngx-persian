import { JdatePipe } from './jdate.pipe';
import {JDate} from '../JDate/jdate';

describe('JdatePipe', () => {
  let pipe: JdatePipe;
  const date = new JDate(1397, 1, 23, 12, 12, 30, 300);

  beforeEach(() => {
    pipe = new JdatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('should return formatted text when format name passed as second parameter.', () => {
    [
      ['short', '97/2/23 12:12 ب.ظ'],
      ['shortDate', '97/2/23 12:12 ب.ظ'],
      ['medium', '23 اردیبهشت 1397، 12:12 ب.ظ'],
      ['mediumDate', '23 اردیبهشت 1397، 12:12 ب.ظ'],
      ['long', '23 اردیبهشت 1397، 12:12:30 بعد از ظهر'],
      ['longDate', '23 اردیبهشت 1397، 12:12:30 بعد از ظهر'],
      ['shortTime', '12:12 ب.ظ'],
      ['mediumTime', '12:12:30 ب.ظ'],
      ['longTime', '12:12:30.300 بعد از ظهر']
    ].forEach(([format_str, expectedOutput]) => {
      it(`should return formatted date (${expectedOutput}) string when format string is ${format_str}`, () => {
        expect(pipe.transform(date, format_str)).toBe(expectedOutput);
      });
    });
  });

  it('should return custom formatted string when format string passed instead of format name.', () => {
    expect(pipe.transform(date, 'yyyy-mm HH')).toBe('1397-02 12');
  });

  it('should return mediumDate formatted string when no formatting string has been passed.', () => {
    expect(pipe.transform(date)).toBe('23 اردیبهشت 1397، 12:12 ب.ظ');
  });

});
