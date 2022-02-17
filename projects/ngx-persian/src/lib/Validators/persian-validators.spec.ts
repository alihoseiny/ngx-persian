import {persianLettersValidator, persianNumbersValidator} from './persian-validators';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentFixture, TestBed} from '@angular/core/testing';


@Component({
    selector: 'ngx-persian-test-tcomponent',
    template: `
    <form  [formGroup]="form">
      <input type="text" formControlName="persianNumber" style="visibility: hidden;">
      <input type="text" formControlName="persianLetter" style="visibility: hidden;">
      <input type="text" formControlName="persianLetterAllOptions" style="visibility: hidden;">
    </form>
  `
})
class NgPersianTestTComponent implements OnInit{
    form: FormGroup | undefined;

    ngOnInit() {
        this.form = new FormGroup({
            persianNumber: new FormControl('', [persianNumbersValidator()]),
            persianLetter: new FormControl('', [persianLettersValidator()]),
            persianLetterAllOptions: new FormControl('',
                [persianLettersValidator({whitespaces: true, symbols: true, persianDigits: true, enDigits: true})])
        });
    }
}


describe('Persian validators', () => {
    let component: NgPersianTestTComponent;
    let fixture: ComponentFixture<NgPersianTestTComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            declarations: [NgPersianTestTComponent]
        });

        // Create component and test fixture
        fixture = TestBed.createComponent(NgPersianTestTComponent);

        // Get test component from the fixture
        component = fixture.componentInstance;
        component.ngOnInit();
    });

    describe('persianNumbersValidator', () => {

        it('should be invalid when value is empty', () => {
            // @ts-ignore
            expect(component.form.get('persianNumber').valid).toBeFalsy();
        });

        [
            '123654',
            '۸۷۶۳۴۵۷۴a',
            'سلام',
            '0۵۳۷۴۵۶۳۴۶'
        ].forEach(input => {
            it(`should return validation error when input (${input}) is not a valid persian number`, () => {
                // @ts-ignore
                component.form.get('persianNumber').setValue(input);
                // @ts-ignore
                expect(component.form.get('persianNumber').valid).toBeFalsy();
            });
        });

        it('should be valid when input string is a string contains only persian letters.', () => {
            // @ts-ignore
            component.form.get('persianNumber').setValue('۱۸۴۹۵۷۴۳۹۷');
            // @ts-ignore
            expect(component.form.get('persianNumber').valid).toBeTruthy();
        });

    });

    describe('persianLettersValidator', () => {
        it('should be valid when input is empty', () => {
            // @ts-ignore
            expect(component.form.get('persianLetter').valid).toBeTruthy();
        });

        it(`should be valid if value only contains persian letters and options is default`, () => {
            // @ts-ignore
            component.form.get('persianLetter').setValue('بدونفاصله');
            // @ts-ignore
            expect(component.form.get('persianLetter').valid).toBeTruthy();
        });

        [
            'متن فارسی با فاصله',
            'فارسی۱۲۳',
            'فارسی123458',
            'En'
        ].forEach(input => {
            it(`should be invalid if value (${input}) does not only contains persian letters and options is default`, () => {
                // @ts-ignore
                component.form.get('persianLetter').setValue(input);
                // @ts-ignore
                expect(component.form.get('persianLetter').valid).toBeFalsy();
            });
        });

        it('should be valid when input contains all options and options allowed all. ', () => {
            // @ts-ignore
            component.form.get('persianLetterAllOptions').setValue('یک متن فارسی دارای اعداد ۱۲۳۴ و 123.');
            // @ts-ignore
            expect(component.form.get('persianLetterAllOptions').valid).toBeTruthy();
        });

    });
});
