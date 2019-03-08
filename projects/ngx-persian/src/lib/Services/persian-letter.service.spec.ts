import { TestBed } from '@angular/core/testing';

import { PersianLetterService } from './persian-letter.service';

describe('PersianLetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersianLetterService = TestBed.get(PersianLetterService);
    expect(service).toBeTruthy();
  });
});
