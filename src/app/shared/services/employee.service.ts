import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly PATH: string = 'funcionarios';
  private readonly PATH_EMP_BY_EMPLOY = '/empresa/{empresaId}'


  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService
  ) { }

  listEmpByEmploy(): Observable<any> {
    
    return this.http.get(env.baseUrlApi + this.PATH + this.PATH_EMP_BY_EMPLOY.replace(
      '{empresaId}', this.httpUtil.getEmployId()
    ), this.httpUtil.headers());
  }
}
