import { TestBed } from '@angular/core/testing';

import { UpdatelnmService } from './_services/updatelnm.service';

describe('UpdatelnmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatelnmService = TestBed.get(UpdatelnmService);
    expect(service).toBeTruthy();
  });
});
