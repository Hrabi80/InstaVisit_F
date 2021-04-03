import { TestBed } from '@angular/core/testing';

import { CoffeService } from './coffe.service';

describe('CoffeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoffeService = TestBed.get(CoffeService);
    expect(service).toBeTruthy();
  });
});
