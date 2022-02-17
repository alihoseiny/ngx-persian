// import {TestBed} from '@angular/core/testing';
//
// import {PersianNumberService} from './persian-number.service';
// import {InvalidServiceInputError} from './InvalidServiceInput.error';
//
// describe('PersianNumberService', () => {
//     let persianNumberService: PersianNumberService;
//     beforeEach(() => {
//         TestBed.configureTestingModule({});
//         persianNumberService = new PersianNumberService();
//     });
//
//     it('should be created', () => {
//         const service: PersianNumberService = TestBed.get(PersianNumberService);
//         expect(service).toBeTruthy();
//     });
//
//     describe('containsPersian', () => {
//         it('should return false when input is an empty string', () => {
//             expect(persianNumberService.containsPersian('')).toBeFalsy();
//         });
//
//         [
//             '123',
//             '   9878 484 \t00',
//             'some english text',
//             'متن فارسی',
//             'dsf 54fd0dsf45',
//             '46468متن8787نوش ته'
//         ].forEach(input => {
//             it(`should return false when input (${input}) doesn't contain any persian number`, () => {
//                 expect(persianNumberService.containsPersian(input)).toBeFalsy();
//             });
//         });
//
//         [
//             '۱۲۳۴۵۹۷۶۰',
//             '   ۰۹۷۷۷۷۷ ۳\t۰۳',
//             'سبی۰۸ا۲۳۴م',
//             '   یک متن ۶ فارسی بلند',
//             'A   Lon۲g english text '
//         ].forEach(input => {
//             it(`should return true when input (${input}) contains any persian number`, () => {
//                 expect(persianNumberService.containsPersian(input)).toBeTruthy();
//             });
//         });
//
//     });
//
//     describe('isPersian', () => {
//
//         it('should return false when inputs is an empty string', () => {
//             expect(persianNumberService.isPersian('')).toBeFalsy();
//         });
//
//         [
//             '123456',
//             '\t321 01   ',
//             '۱۲۳4۵۶',
//             '1245۸۹۶21۰',
//             'Just english text',
//             'تنها حروف فارسی',
//             '۸۴۸۴سلام ۹۸۰۰۰۰۰۰',
//             '   ۱۲۳ ۴ ',
//             '۸۷۶۹۵some en te x۳t۴'
//
//         ].forEach((input) => {
//             it(`should return false when input string (${input}) containing any english number`, () => {
//                 expect(persianNumberService.isPersian(input)).toBeFalsy();
//             });
//         });
//
//         it(`should return true when all characters in the input are persian numbers`, () => {
//             expect(persianNumberService.isPersian('۲۳۴۶۷۸۹۰۹۸۷۶۳۲۱')).toBeTruthy();
//         });
//
//     });
//
//     describe('arabicToPersian', () => {
//         [
//             ['315٤', '315۴'],
//             ['٤٥٦', '۴۵۶'],
//             ['۸۷۶٥٥٥۲۳۴۳٦۶٤۴٤', '۸۷۶۵۵۵۲۳۴۳۶۶۴۴۴']
//         ].forEach(([input, expectedOutput]) => {
//             it(`should replace arabic numbers to the persian ones and change ${input} to the ${expectedOutput}`, () => {
//                 expect(persianNumberService.arabicToPersian(input)).toBe(expectedOutput);
//             });
//         });
//
//     });
//
//     describe('toPersian', () => {
//         [
//             ['123456', '۱۲۳۴۵۶'],
//             ['  110   8989\t', '  ۱۱۰   ۸۹۸۹\t'],
//             [' En00 words 87856 4', ' En۰۰ words ۸۷۸۵۶ ۴'],
//             ['نوشته‌های فارسی با 564 56464 اعداد 22 انگلیسی', 'نوشته‌های فارسی با ۵۶۴ ۵۶۴۶۴ اعداد ۲۲ انگلیسی'],
//             ['۳۲۴۵۵۶۷۶۷', '۳۲۴۵۵۶۷۶۷'],
//             ['english words with ۴۳۵۹۷۳۷۶ persian numbers', 'english words with ۴۳۵۹۷۳۷۶ persian numbers'],
//             ['متن فارسی با اعداد ۹۸۷ فارسی۰۰۰۰', 'متن فارسی با اعداد ۹۸۷ فارسی۰۰۰۰'],
//             ['A string without any number', 'A string without any number'],
//             ['یک متن بدون هیچ عددی', 'یک متن بدون هیچ عددی'],
//             [123456, '۱۲۳۴۵۶'],
//             ['', '']
//         ].forEach(([input, output]) => {
//             it(`should replace all en numbers in input value to persian ones. input: ${input}, output: ${output} `, () => {
//                 // Ignores typescript error on type of the output variable
//                 // @ts-ignore
//                 expect(persianNumberService.toPersian(input)).toBe(output);
//             });
//         });
//
//     });
//
//     describe('toEnglish', () => {
//         [
//             ['123456', '۱۲۳۴۵۶'],
//             ['  110   8989\t', '  ۱۱۰   ۸۹۸۹\t'],
//             [' En00 words 87856 4', ' En۰۰ words ۸۷۸۵۶ ۴'],
//             ['نوشته‌های فارسی با 564 56464 اعداد 22 انگلیسی', 'نوشته‌های فارسی با ۵۶۴ ۵۶۴۶۴ اعداد ۲۲ انگلیسی'],
//             ['324556767', '324556767'],
//             ['english words with 43597376 english numbers', 'english words with 43597376 english numbers'],
//             ['متن فارسی با اعداد 987 انگلیسی0000', 'متن فارسی با اعداد 987 انگلیسی0000'],
//             ['A string without any number', 'A string without any number'],
//             ['یک متن بدون هیچ عددی', 'یک متن بدون هیچ عددی'],
//             ['', '']
//         ].forEach(([output, input]) => {
//             it(`should replace all en numbers in input value to persian ones. input: ${input}, output: ${output} `, () => {
//                 expect(persianNumberService.toEnglish(input)).toBe(output);
//             });
//         });
//
//     });
// });
