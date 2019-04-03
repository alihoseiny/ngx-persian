import { Pipe, PipeTransform} from '@angular/core';

/**
 * Formats a 10-digit number or string to national code format.
 */
@Pipe({name: 'nationalCode'})
export class NationalCodePipe implements PipeTransform {

  /**
   * @param value a 10-digit number or a string only contains 10 digits.
   * @example 001-236547-5
   * @return a formatted text from 10-digit input or an empty string if length of the input is not 10.
   */
  transform(value: string | number): string {
    value = String(value);
    if (value.length !== 10) { return ''; }
    return `${value.substring(0, 3)}-${value.substring(3, 9)}-${value[9]}`;
  }
}
