import { TestBed } from '@angular/core/testing';

import { UpdatelService } from './_services/updatel.service';

describe('UpdatelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatelService = TestBed.get(UpdatelService);
    expect(service).toBeTruthy();
  });
});
