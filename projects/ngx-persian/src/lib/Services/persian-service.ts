export interface PersianService {

  is_persian(value: string): boolean;

  to_persian(value: string | number): string;

  contains_persian(value: string): boolean;
}
