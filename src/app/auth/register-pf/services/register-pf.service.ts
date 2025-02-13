import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationPf } from '../models';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterPfService {

  private readonly PATH: string = '/cadastrar-pf';

  constructor( private http: HttpClient) { }

  registerPf(registerPfPayload: RegistrationPf) {
    return this.http.post(env.baseUrlApi + this.PATH, registerPfPayload);
  }
}
