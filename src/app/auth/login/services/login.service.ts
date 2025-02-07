import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from '../../../../environments/environment';
import { Login } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly PATH: string = 'auth';

  constructor(private httpClient: HttpClient) { }

  login(login: Login): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATH, login);
  }
}
