import {EnNumPipe} from './enNum.pipe';
import {PersianNumberService} from '../Services/persian-number.service';

describe('EnNumPipe', () => {
    let enNum: EnNumPipe;

    beforeEach(() => {
        enNum = new EnNumPipe(new PersianNumberService());
    });

    it('#Should convert fa digits on input parameter with en ones and return result.', () => {
        expect(enNum.transform('۰۱۲۳۴۵۶۷۸۹۶۵۰۲')).toBe('01234567896502');
        expect(enNum.transform('۰۱۲۳۴۵dsdsffsd۶۷۸dsfjk۹۶۵۰۲')).toBe('012345dsdsffsd678dsfjk96502');
        expect(enNum.transform('۰۱۲بب۳۴۵dsdsffsd۶۷۸dsfjk۹۶۵۰۲')).toBe('012بب345dsdsffsd678dsfjk96502');
    });
});
