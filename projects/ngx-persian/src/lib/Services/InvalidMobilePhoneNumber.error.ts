/**
 * When mobile phone number is not valid this error will throw.
 */
export class InvalidMobilePhoneNumberError extends Error {
    constructor() {
        super('This phone number is not valid.');
    }
}
