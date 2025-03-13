import { TestBed } from '@angular/core/testing';

import { RegisterPjService } from './register-pj.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterPjService', () => {
  let service: RegisterPjService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(RegisterPjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
