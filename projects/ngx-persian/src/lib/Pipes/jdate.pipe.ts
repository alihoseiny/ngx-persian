import { Pipe, PipeTransform } from '@angular/core';
import {JDate} from '../JDate/jdate';

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

@Pipe({
  name: 'jdate'
})
export class JdatePipe implements PipeTransform {

  private static convertNameToFormat(formatName: string): string {
    if (!FromatNames[formatName]) {
      return formatName
    }
    return FromatNames[formatName];
  }

  transform(value: JDate, format: string = 'mediumDate'): string {
    return value.format(JdatePipe.convertNameToFormat(format));
  }

}
