import {persianLettersValidator, persianNumbersValidator} from './persian-validators';
import {Component} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('Persian validators', () => {
  let component: NgPersianTestTComponent;
  let fixture: ComponentFixture<NgPersianTestTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
    declarations: [NgPersianTestTComponent]
  });

    // create component and test fixture
    fixture = TestBed.createComponent(NgPersianTestTComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  describe('persianNumbersValidator', () => {

    it('should be invalid when value is empty', () => {
      expect(component.form.get('persianNumber').valid).toBeFalsy();
    });

    [
      '123654',
      '۸۷۶۳۴۵۷۴a',
      'سلام',
      '0۵۳۷۴۵۶۳۴۶'
    ].forEach(input => {
      it(`should return validation error when input (${input}) is not a valid persian number`, () => {
        component.form.get('persianNumber').setValue(input);
        expect(component.form.get('persianNumber').valid).toBeFalsy();
      });
    });

  });

  describe('persianLettersValidator', () => {
    it('should be valid when input is empty', () => {
      expect(component.form.get('persianLetter').valid).toBeTruthy();
    });

      it(`should be valid if value only contains persian letters and options is default`, () => {
        component.form.get('persianLetter').setValue('بدونفاصله');
        expect(component.form.get('persianLetter').valid).toBeTruthy();
      });

    [
      'متن فارسی با فاصله',
      'فارسی۱۲۳',
      'فارسی123458',
      'En'
    ].forEach(input => {
      it(`should be invalid if value (${input}) does not only contains persian letters and options is default`, () => {
        component.form.get('persianLetter').setValue(input);
        expect(component.form.get('persianLetter').valid).toBeFalsy();
      });
    });

    it('should be valid when input contains all options and options allowed all. ', () => {
      component.form.get('persianLetterAllOptions').setValue('یک متن فارسی دارای اعداد ۱۲۳۴ و 123.');
      expect(component.form.get('persianLetterAllOptions').valid).toBeTruthy();
    });

  });


});
@Component({
  selector: 'ngx-persian-test-tcomponent',
  template: `
    <form  [formGroup]="form">
      <input type="text" formControlName="persianNumber">
      <input type="text" formControlName="persianLetter">
      <input type="text" formControlName="persianLetterAllOptions">
    </form>
  `
})
class NgPersianTestTComponent {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      persianNumber: new FormControl('', [persianNumbersValidator()]),
      persianLetter: new FormControl('', [persianLettersValidator()]),
      persianLetterAllOptions: new FormControl('', [persianLettersValidator({whitespaces: true, symbols: true, persianDigits: true, enDigits: true})]),
    });
  }
}
