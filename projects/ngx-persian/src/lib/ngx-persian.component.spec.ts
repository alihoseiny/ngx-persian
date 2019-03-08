import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPersianComponent } from './ngx-persian.component';

describe('NgxPersianComponent', () => {
  let component: NgxPersianComponent;
  let fixture: ComponentFixture<NgxPersianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPersianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPersianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
