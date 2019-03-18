export class InvalidMobileOperatorError extends Error {
  constructor(...params) {
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    // @ts-ignore
    if (Error.captureStackTrace) {
      // @ts-ignore
      Error.captureStackTrace(this, InvalidMobileOperatorError);
    }

    this.message = 'Operator of this number is not recognizable.';
  }
}
