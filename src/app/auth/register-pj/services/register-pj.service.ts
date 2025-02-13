import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationPj } from '../models';
import { environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterPjService {

  private readonly PATH: string = '/cadastrar-pj';

  constructor(private http: HttpClient) { }

  registerPj(registerPjPayload: RegistrationPj) {
    return this.http.post(env.baseUrlApi + this.PATH, registerPjPayload);
  }
}
