export class InvalidServiceInputError extends Error {
  constructor(...params) {
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    // @ts-ignore
    if (Error.captureStackTrace) {
      // @ts-ignore
      Error.captureStackTrace(this, InvalidServiceInputError);
    }

    this.message = 'Invalid value has been passed to the service.';
  }
}
