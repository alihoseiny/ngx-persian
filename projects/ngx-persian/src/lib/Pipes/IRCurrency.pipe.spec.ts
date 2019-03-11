import {IRCurrencyPipe} from './IRCurrency.pipe';

describe('IRCurrencyPipe', () => {
  let irCurrency: IRCurrencyPipe;

  beforeEach(() => {
    irCurrency = new IRCurrencyPipe('en-US');
  });

  it('#Should throw Error when a not numeric string has been assigned to it.', () => {
    expect(() => {
      irCurrency.transform('not numeric.');
    }).toThrow(new Error('NaN is not a acceptable number'));

    expect( () => {
      irCurrency.transform('not numeric.', 't');
    }).toThrow(new Error('NaN is not a acceptable number'));
  });

  it('#Should return input value as a string separated each 3 digits with , and with ریال postfix when currency value did not ' +
    'set.', () => {
    expect(irCurrency.transform('1925100')).toBe('1,925,100 ریال');
  });

  it('#Should return input value as a string separated each 3 digits with , and with ریال postfix when currency value is r.', () => {
    expect(irCurrency.transform('1925100', 'r')).toBe('1,925,100 ریال');
  });

  it('#Should return input value as a string separated each 3 digits with , and with ریال postfix when currency value is rial.', () => {
    expect(irCurrency.transform('1925100', 'rial')).toBe('1,925,100 ریال');
  });

  it('#Should return input value as a string separated each 3 digits with , and with تومان postfix when currency value is toman.', () => {
    expect(irCurrency.transform('1925100', 'toman')).toBe('1,925,100 تومان');
  });

  it('#Should return input value as a string separated each 3 digits with , and with تومان postfix when currency value is t.', () => {
    expect(irCurrency.transform('1925100', 't')).toBe('1,925,100 تومان');
  });

});
