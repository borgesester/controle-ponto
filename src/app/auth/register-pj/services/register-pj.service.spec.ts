import { TestBed } from '@angular/core/testing';

import { RegisterPjService } from './register-pj.service';

describe('RegisterPjService', () => {
  let service: RegisterPjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterPjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
