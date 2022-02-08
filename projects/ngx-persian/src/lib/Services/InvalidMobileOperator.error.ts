/**
 * This error will throw when there is no valid mobile operator for inputted mobile phone number.
 */
export class InvalidMobileOperatorError extends Error {
    constructor() {
        super('Operator of this number is not recognizable.');
    }
}
