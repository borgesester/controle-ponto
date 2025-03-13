import { TestBed } from '@angular/core/testing';

import { EntryService } from './entry.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Entry } from '../models';

describe('EntryService', () => {
  let service: EntryService;
  let httpController: HttpTestingController;
  let url = 'lancamentos';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(EntryService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('add', () => {
    it('should call add and return ', () => {

      const mockAddEntryResponse = {
        data: {
          data: {
            data: "2025-03-07 16:28:53",
            descricao: null,
            funcionarioId: 3,
            id: 24,
            localizacao: null,
            tipo: "TERMINO_ALMOCO"
          }
        }
      }

      const mockNewEntry: Entry = {
        data: "2025-03-07 16:28:53",
        funcionarioId: '3',
        id: undefined,
        localizacao: undefined,
        tipo: "TERMINO_ALMOCO"
      }
      
      service.add(mockNewEntry).subscribe((res) => {
        expect(res).toEqual(mockAddEntryResponse);
      });
      const req = httpController.expectOne(url);
  
      req.flush(mockAddEntryResponse);
    });
  });

  describe('listAllEntry', () => {
    it('should call listAllEntry and return ', () => {

      const mockEntryByEmpResponse = {
        data: [
          
        ]   
      }
      const empId = '2'
      service.listAllEntry().subscribe((res) => {
        expect(res).toEqual(mockEntryByEmpResponse);
      });

      const req = httpController.expectOne({
        method: 'GET'
      });
  
      req.flush(mockEntryByEmpResponse);
      httpController.verify()
    });
  });

  describe('getLastEntry', () => {
    it('should call getLastEntry and return ', () => {

      const mockEntryByEmpResponse = {
        data: [
          
        ]   
      }
      service.getLastEntry().subscribe((res) => {
        expect(res).toEqual(mockEntryByEmpResponse);
      });

      const req = httpController.expectOne({
        method: 'GET'
      }
      );

  
      req.flush(mockEntryByEmpResponse)
      httpController.verify();
    });
  });

  describe('listEntryByEmployee', () => {
    it('should call listEntryByEmployee and return ', () => {

      const mockEntryByEmpResponse = {
        data: [
          { 
            data: '2025-03-07 16:45:25', 
            descricao: null,
            funcionarioId: 3,
            id: 25, 
            localizacao: null, 
            tipo: "TERMINO_TRABALHO"
          },
          {
            data: '2025-03-07 16:28:53', 
            descricao: null,
            funcionarioId: 3,
            id: 24, 
            localizacao: null,
            tipo: 'TERMINO_ALMOCO', 
          }
        ]
          
      }
      const empId = '3'
      const pag = 0
      const ord = 'data'
      const dir = 'DESC'
      service.listEntryByEmployee(empId, pag, ord, dir).subscribe((res) => {
        expect(res).toEqual(mockEntryByEmpResponse);
      });
      const req = httpController.expectOne(url + `/funcionario/${empId}?pag=${0}&ord=${ord}&dir=${dir}`);
  
      req.flush(mockEntryByEmpResponse);
    });
  });

  describe('deleteEntry', () => {
    it('should call deleteEntry and return ', () => {

      const mockEntryDelResponse = {
        data: null
      }
      
      service.deleteEntry('3').subscribe((res) => {
        expect(res).toEqual(mockEntryDelResponse);
      });
      const req = httpController.expectOne(url + '/3');
  
      req.flush(mockEntryDelResponse);
    });
  });

  describe('getEntryById', () => {
    it('should call getEntryById and return ', () => {

      const mockEntryByIdResponse = {
        data: {
          data: {
            data: "2025-03-07 16:28:53",
            descricao: null,
            funcionarioId: 3,
            id: 24,
            localizacao: null,
            tipo: "TERMINO_ALMOCO"
          }
        }
      }
      
      service.getEntryById('3').subscribe((res) => {
        expect(res).toEqual(mockEntryByIdResponse);
      });
      const req = httpController.expectOne(url + '/3');
  
      req.flush(mockEntryByIdResponse);
    });
  });

  describe('update', () => {
    it('should call update and return ', () => {

      const mockEntryUpdated = {
        data: {
          data: {
            data: "2025-03-07 16:29:00",
            descricao: null,
            funcionarioId: 3,
            id: 24,
            localizacao: null,
            tipo: "TERMINO_ALMOCO"
          }
        }
      }
      
      service.getEntryById('3').subscribe((res) => {
        expect(res).toEqual(mockEntryUpdated);
      });
      const req = httpController.expectOne(url + '/3');
  
      req.flush(mockEntryUpdated);
    });
  });
});
