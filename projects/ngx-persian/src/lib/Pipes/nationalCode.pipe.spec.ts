import {NationalCodePipe} from './nationalCode.pipe';

describe('NationalCodePipe', () => {
  let nationalCode: NationalCodePipe;

  beforeEach(() => {
    nationalCode = new NationalCodePipe();
  });

  it('should return formatted string when a sequens of characters with valid length passed to it', () => {
    expect(nationalCode.transform('0019354184')).toBe('001-935418-4');
  });

  [
    '012345678987654321',
    '12345',
    '',
    undefined,
    null
  ].forEach(input => {
    it(`should throw Error when input (${input}) is not an acceptable national code.`, () => {
      expect(() => {
        nationalCode.transform(input);
      }).toThrow(new Error(`${input} is not a acceptable national code.`));
    });
  });
});
