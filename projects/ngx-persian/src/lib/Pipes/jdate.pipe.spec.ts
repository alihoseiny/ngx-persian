import {JdatePipe} from './jdate.pipe';
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

    [
        ['SHORT', '97/2/23 12:12 ب.ظ'],
        ['SHORT_DATE', '97/2/23 12:12 ب.ظ'],
        ['MEDIUM', '23 اردیبهشت 1397، 12:12 ب.ظ'],
        ['MEDIUM_DATE', '23 اردیبهشت 1397، 12:12 ب.ظ'],
        ['LONG', '23 اردیبهشت 1397، 12:12:30 بعد از ظهر'],
        ['LONG_DATE', '23 اردیبهشت 1397، 12:12:30 بعد از ظهر'],
        ['SHORT_TIME', '12:12 ب.ظ'],
        ['MEDIUM_TIME', '12:12:30 ب.ظ'],
        ['LONG_TIME', '12:12:30.300 بعد از ظهر']
    ].forEach(([formatStr, expectedOutput]) => {
        it(`should return formatted date (${expectedOutput}) string when format string is ${formatStr}`, () => {
            expect(pipe.transform(date, formatStr)).toBe(expectedOutput);
        });
    });

    [
        ['SHORT', '97/2/23 12:12 ب.ظ'],
        ['SHORT_DATE', '97/2/23 12:12 ب.ظ'],
        ['MEDIUM', '23 اردیبهشت 1397، 12:12 ب.ظ'],
        ['MEDIUM_DATE', '23 اردیبهشت 1397، 12:12 ب.ظ'],
        ['LONG', '23 اردیبهشت 1397، 12:12:30 بعد از ظهر'],
        ['LONG_DATE', '23 اردیبهشت 1397، 12:12:30 بعد از ظهر'],
        ['SHORT_TIME', '12:12 ب.ظ'],
        ['MEDIUM_TIME', '12:12:30 ب.ظ'],
        ['LONG_TIME', '12:12:30.300 بعد از ظهر']
    ].forEach(([formatStr, expectedOutput]) => {
        it(`should convert Date to JDate and return formatted date (${expectedOutput}) string when format string is ${formatStr}`, () => {
            expect(pipe.transform(date.getGeorgianDate(), formatStr)).toBe(expectedOutput);
        });
    });

    it('should return custom formatted string when format string passed instead of format name.', () => {
        expect(pipe.transform(date, 'yyyy-mm HH')).toBe('1397-02 12');
    });

    it('should return mediumDate formatted string when no formatting string has been passed.', () => {
        expect(pipe.transform(date)).toBe('23 اردیبهشت 1397، 12:12 ب.ظ');
    });

});
