import { TestBed } from '@angular/core/testing';

import { RegisterPfService } from './register-pf.service';

describe('RegisterPfService', () => {
  let service: RegisterPfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterPfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
