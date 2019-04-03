/**
 * When mobile phone number is not valid this error will throw.
 */
export class InvalidMobilePhoneNumberError extends Error {
  constructor(...params) {
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    // @ts-ignore
    if (Error.captureStackTrace) {
      // @ts-ignore
      Error.captureStackTrace(this, InvalidMobilePhoneNumberError);
    }

    this.message = 'This phone number is not valid.';
  }
}
