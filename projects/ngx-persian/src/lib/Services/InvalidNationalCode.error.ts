/**
 * When mobile phone number is not valid this error will throw.
 */
export class InvalidNationalCodeError extends Error {
  nationalCode: string;
  constructor(nationalCode: string = '', ...params) {

    super(...params);

    this.nationalCode = nationalCode;

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    // @ts-ignore
    if (Error.captureStackTrace) {
      // @ts-ignore
      Error.captureStackTrace(this, InvalidNationalCodeError);
    }

    this.message = `The national code value (${this.nationalCode}) is not a valid national code.`;
  }
}
