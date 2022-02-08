/**
 * All services those want to serve conversion to persian language should implement this interface.
 */
export interface PersianService {

    isPersian(value: string): boolean;

    toPersian(value: string | number): string;

    containsPersian(value: string): boolean;
}
