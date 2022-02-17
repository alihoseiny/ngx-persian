// import {NationalCodePipe} from './nationalCode.pipe';
//
// describe('NationalCodePipe', () => {
//     let nationalCode: NationalCodePipe;
//
//     beforeEach(() => {
//         nationalCode = new NationalCodePipe();
//     });
//
//     it('should return formatted string when a sequens of characters with valid length passed to it', () => {
//         expect(nationalCode.transform('0019354184')).toBe('001-935418-4');
//     });
//
//     [
//         '012345678987654321',
//         '12345',
//         '',
//     ].forEach(input => {
//         it(`should return an empty string when input (${input}) is not an acceptable national code.`, () => {
//             expect(nationalCode.transform(input)).toBe('');
//         });
//     });
// });
