import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'nationalCode'})
export class NationalCodePipe implements PipeTransform {
  transform(value: string | number): any {
    value = String(value);
    if (value.length !== 10) { throw new Error(`${value} is not a acceptable national code.`); }
    return `${value.substring(0, 3)}-${value.substring(3, 9)}-${value[9]}`;
  }
}
