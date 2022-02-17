import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ValidatorFunctionsComponent } from './validator-functions.component';

describe('ValidatorFunctionsComponent', () => {
  let component: ValidatorFunctionsComponent;
  let fixture: ComponentFixture<ValidatorFunctionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
