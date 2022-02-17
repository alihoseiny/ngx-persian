/**
 * This error will throw when input value of the service method is not a valid value.
 */
export class InvalidServiceInputError extends Error {
    constructor() {
        super('Invalid value has been passed to the service.');
    }
}
