import { TestBed } from '@angular/core/testing';

import { RegisterPfService } from './register-pf.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterPfService', () => {
  let service: RegisterPfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RegisterPfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
