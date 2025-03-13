import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpController: HttpTestingController;
  let url = 'funcionarios/empresa';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(EmployeeService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('listEmpByEmploy', () => {
    it('should call listEmpByEmploy and return ', () => {

      const mockEntryByEmpResponse = {
        data: [
          
        ]   
      }
      const empId = '1'
      service.listEmpByEmploy().subscribe((res) => {
        expect(res).toEqual(mockEntryByEmpResponse);
      });
      const req = httpController.expectOne({
        method: 'GET'
      });
      req.flush(mockEntryByEmpResponse);
      httpController.verify();
    });
  });

});
