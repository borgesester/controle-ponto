import { TestBed } from '@angular/core/testing';

import { HttpUtilService } from './http-util.service';

describe('HttpUtilService', () => {
  let service: HttpUtilService;
  let localStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('getUserId', () => {
    it('should call getDataUser', () => {
      localStorage['token'] = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBlbXByZXNhLmNvbSIsInJvbGUiOiJST0xFX0FETUlOIiwiZW1wcmVzYUlkIjoxLCJjcmVhdGVkIjoxNzQxMzc3OTQ1MTQ1LCJpZCI6MiwiZXhwIjoxNzQxOTgyNzQ1fQ.vlDq7TOS-i2S6aZoQ2Bc-uZRNTG6ExAAaDLLSTy_hMK_IYJZdC02zxdqM3XJXVh4erixC4d7oC91eoTofy7TjQ"
      const getDataSpy = spyOn(service, 'getDataUser');

      service.getUserId();

      expect(getDataSpy).toHaveBeenCalled();
    })
  })

  describe('getProfile', () => {
    it('should call getDataUser', () => {
      localStorage['token'] = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBlbXByZXNhLmNvbSIsInJvbGUiOiJST0xFX0FETUlOIiwiZW1wcmVzYUlkIjoxLCJjcmVhdGVkIjoxNzQxMzc3OTQ1MTQ1LCJpZCI6MiwiZXhwIjoxNzQxOTgyNzQ1fQ.vlDq7TOS-i2S6aZoQ2Bc-uZRNTG6ExAAaDLLSTy_hMK_IYJZdC02zxdqM3XJXVh4erixC4d7oC91eoTofy7TjQ"
      const getDataSpy = spyOn(service, 'getDataUser');

      service.getProfile();

      expect(getDataSpy).toHaveBeenCalled();
    })
  })

  describe('getEmployId', () => {
    it('should call getDataUser', () => {
      localStorage['token'] = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBlbXByZXNhLmNvbSIsInJvbGUiOiJST0xFX0FETUlOIiwiZW1wcmVzYUlkIjoxLCJjcmVhdGVkIjoxNzQxMzc3OTQ1MTQ1LCJpZCI6MiwiZXhwIjoxNzQxOTgyNzQ1fQ.vlDq7TOS-i2S6aZoQ2Bc-uZRNTG6ExAAaDLLSTy_hMK_IYJZdC02zxdqM3XJXVh4erixC4d7oC91eoTofy7TjQ"
      const getDataSpy = spyOn(service, 'getDataUser');

      service.getEmployId();

      expect(getDataSpy).toHaveBeenCalled();
    })
  })
});
