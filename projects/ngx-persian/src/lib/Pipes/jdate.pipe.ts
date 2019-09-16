import { Pipe, PipeTransform } from '@angular/core';
import {JDate} from '../JDate/jdate';

/**
 * Pre-defined formats date formats those can use for formatting JDate objects with jdate pipe.
 */
enum FromatNames {
  'short' = 'yy/m/d h:M t',
  'shortDate' = 'yy/m/d h:M t',
  'medium' = 'd mmm yyyy، h:M t',
  'mediumDate' = 'd mmm yyyy، h:M t',
  'long' = 'd mmm yyyy، h:M:S T',
  'longDate' = 'd mmm yyyy، h:M:S T',
  'shortTime' = 'h:M t',
  'mediumTime' = 'h:M:S t',
  'longTime' = 'h:M:S.l T',
}

/**
 * Formats JDate objects according to the given format.
 *
 * The result of this pipe is not reevaluated when the input is mutated. To avoid the need to reformat the date on every change-detection
 * cycle, treat the date as an immutable object and change the reference when the pipe needs to run again.
 *
 * You can pass a format pattern string like [JDate format method]{@link https://alihoseiny.github.io/ngx-persian/classes/JDate.html#format}
 *
 * Also you can use pre-defined format names described below:
 *
 *        'short': equivalent to yy/m/d h:M t {@example '97/2/23 12:12 ب.ظ'}
 *
 *        'shortDate': same as short
 *
 *        'medium': equivalent to 'd mmm yyyy، h:M t' {@example '23 اردیبهشت 1397، 12:12 ب.ظ'}
 *
 *        'mediumDate': same as medium
 *
 *        'long': equivalent to 'd mmm yyyy، h:M:S T' {@example '23 اردیبهشت 1397، 12:12:30 بعد از ظهر'}
 *
 *        'longDate': same as long
 *
 *        'shortTime': equivalent to 'h:M t' {@example '12:12 ب.ظ'}
 *
 *        'mediumTime': equivalent to 'h:M:S t' {@example '12:12:30 ب.ظ'}
 *
 *        'longTime': equivalent to 'h:M:S.l T' {@example '12:12:30.300 بعد از ظهر'}
 *
 *  Default format is `medium`.
 */
@Pipe({
  name: 'jdate'
})
export class JdatePipe implements PipeTransform {

  /**
   * Checks if `formatName` is in the `FromatNames` enum. If it is, returns related format string. Else returns `formatName` string
   * without any change.
   * @param formatName format name or format pattern string
   * @return formatting pattern string
   */
  private static convertNameToFormat(formatName: string): string {
    if (!FromatNames[formatName]) {
      return formatName
    }
    return FromatNames[formatName];
  }

  /**
   * Formatting the date using `format` method of it with proper formatting pattern created from `format`
   * @param value a Jalali Date object
   * @param format format name or format pattern string
   */
  transform(value: Date, format: string = 'mediumDate'): string {
    if (!(value instanceof JDate)) {
      value = new JDate(value);
    }
    // @ts-ignore
    return value.format(JdatePipe.convertNameToFormat(format));
  }

}
