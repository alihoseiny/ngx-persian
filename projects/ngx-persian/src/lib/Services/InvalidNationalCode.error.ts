/**
 * When mobile phone number is not valid this error will throw.
 */
export class InvalidNationalCodeError extends Error {
    constructor(nationalCode: string = '') {
        super(`The national code value (${nationalCode}) is not a valid national code.`);
    }
}
