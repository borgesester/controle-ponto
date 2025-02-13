import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util.service';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Entry } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private readonly PATH = 'lancamentos';
  private readonly PATH_LAST_ENTRY = '/funcionario/{funcionarioId}/ultimo'
  private readonly PATH_ENTRY = '/funcionario/{funcionarioId}';
  private readonly PATH_ALL_ENTRY = '/funcionario/{funcionarioId}/todos'

  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService
  ) { }

  getLastEntry(): Observable<any> {
    return this.http.get(
      env.baseUrlApi + this.PATH +
        this.PATH_LAST_ENTRY.replace(
          '{funcionarioId}', this.httpUtil.getUserId()
        ), this.httpUtil.headers()
    );
  }

  add(entry: Entry): Observable<any> {
    return this.http.post(
      env.baseUrlApi + this.PATH, entry, this.httpUtil.headers()
    );
  }

  listAllEntry(): Observable<any> {
    return this.http.get(
      env.baseUrlApi + this.PATH +
        this.PATH_ALL_ENTRY.replace(
          '{funcionarioId}', this.httpUtil.getUserId()
        ), this.httpUtil.headers()
    );
  }
}
