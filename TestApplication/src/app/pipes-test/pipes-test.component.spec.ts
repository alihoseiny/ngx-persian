import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PipesTestComponent } from './pipes-test.component';

describe('PipesTestComponent', () => {
  let component: PipesTestComponent;
  let fixture: ComponentFixture<PipesTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
