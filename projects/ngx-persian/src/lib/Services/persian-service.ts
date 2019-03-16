export interface PersianService {

  isPersian(value: string): boolean;

  toPersian(value: string | number): string;

  containsPersian(value: string): boolean;
}
