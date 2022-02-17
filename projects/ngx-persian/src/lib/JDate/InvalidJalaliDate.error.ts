/**
 * This Error will throw When inputted date is not a valid date according to the Jalali Calendar.
 */
export class InvalidJalaliDateError extends Error {
    constructor() {
        super('Invalid jalali date.');
    }
}
