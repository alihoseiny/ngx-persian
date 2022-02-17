import {Pipe, PipeTransform} from '@angular/core';
import {JDate} from '../JDate/jdate';

/**
 * Pre-defined formats date formats those can use for formatting JDate objects with jdate pipe.
 */
enum JDateFormat {            // eslint-disable-line no-shadow
    SHORT = 'yy/m/d h:M t',
    SHORT_DATE = 'yy/m/d h:M t',
    MEDIUM = 'd mmm yyyy، h:M t',
    MEDIUM_DATE = 'd mmm yyyy، h:M t',
    LONG = 'd mmm yyyy، h:M:S T',
    LONG_DATE = 'd mmm yyyy، h:M:S T',
    SHORT_TIME = 'h:M t',
    MEDIUM_TIME = 'h:M:S t',
    LONG_TIME = 'h:M:S.l T',
}

/**
 * Formats JDate objects or convert Date objects (or any instance of classes those implement that interface) to a `JDate` object and format
 * that according to the given format.
 *
 * The result of this pipe is not reevaluated when the input is mutated. To avoid the need to reformat the date on every change-detection
 * cycle, treat the date as an immutable object and change the reference when the pipe needs to run again.
 *
 * You can pass a format pattern string like [JDate format method]{@link https://alihoseiny.github.io/ngx-persian/classes/JDate.html#format}
 *
 * Also you can use pre-defined format names described below:
 *
 *        'SHORT': equivalent to yy/m/d h:M t {@example '97/2/23 12:12 ب.ظ'}
 *
 *        'SHORT_DATE': same as short
 *
 *        'MEDIUM': equivalent to 'd mmm yyyy، h:M t' {@example '23 اردیبهشت 1397، 12:12 ب.ظ'}
 *
 *        'MEDIUM_DATE': same as medium
 *
 *        'LONG': equivalent to 'd mmm yyyy، h:M:S T' {@example '23 اردیبهشت 1397، 12:12:30 بعد از ظهر'}
 *
 *        'LONG_DATE': same as long
 *
 *        'SHORT_TIME': equivalent to 'h:M t' {@example '12:12 ب.ظ'}
 *
 *        'MEDIUM_TIME': equivalent to 'h:M:S t' {@example '12:12:30 ب.ظ'}
 *
 *        'LONG_TIME': equivalent to 'h:M:S.l T' {@example '12:12:30.300 بعد از ظهر'}
 *
 *  Default format is `medium`.
 */
@Pipe({
    name: 'jdate'
})
export class JdatePipe implements PipeTransform {

    /**
     * Checks if `formatName` is in the `FormatNames` enum. If it is, returns related format string. Else returns `formatName` string
     * without any change.
     *
     * @param formatName format name or format pattern string
     * @return formatting pattern string
     */
    private static convertNameToFormat(formatName: keyof typeof JDateFormat): string {
        if (!JDateFormat[formatName]) {
            return formatName;
        }
        return JDateFormat[formatName];
    }

    /**
     * Formatting the date using `format` method of it with proper formatting pattern created from `format`
     *
     * @param value a Jalali Date object or an instance of `Date` object or any class implementing that interface
     * @param format format name or format pattern string
     */
    transform(value: Date, format: string = 'MEDIUM_DATE'): string {
        let inputValue = value;
        if (!(inputValue instanceof JDate)) {
            inputValue = new JDate(inputValue);
        }
        // @ts-ignore
        return inputValue.format(JdatePipe.convertNameToFormat(format));
    }

}
