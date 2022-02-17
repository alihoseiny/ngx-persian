import {FaNumPipe} from './faNum.pipe';
import {PersianNumberService} from '../Services/persian-number.service';

describe('FaNumPipe', () => {
    let faNum: FaNumPipe;

    beforeEach(() => {
        faNum = new FaNumPipe(new PersianNumberService());
    });

    it('#Should return converted digits to persian ones when a string containing only en digits entered.', () => {
        expect(faNum.transform('01234567895172001')).toBe('۰۱۲۳۴۵۶۷۸۹۵۱۷۲۰۰۱');
    });

    it('#Should return converted digits to persian ones when a string containing en and fadigits entered.', () => {
        expect(faNum.transform('012۳۴56۷895172۰01')).toBe('۰۱۲۳۴۵۶۷۸۹۵۱۷۲۰۰۱');
    });

    it('#Should return converted digits to persian ones when a string containing fa and en digits and letters entered.', () => {
        expect(faNum.transform('012dff34567سبیب895172001')).toBe('۰۱۲dff۳۴۵۶۷سبیب۸۹۵۱۷۲۰۰۱');
    });

});
