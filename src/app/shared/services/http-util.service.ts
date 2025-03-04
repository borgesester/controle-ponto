import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor() { }

  headers() {
    let httpHeaders: HttpHeaders = new HttpHeaders();

    if (localStorage['token']) {
      httpHeaders = httpHeaders.set(
        'Authorization', 'Bearer ' + localStorage['token']
      );
    }

    return {headers: httpHeaders};
  }

  getUserId() {    
    if (!localStorage['token']) {
      return '';
    }

    const dataUser = this.getDataUser();
    return dataUser ? dataUser.id : ''; 
  }

  getEmployId() {
    if (!localStorage['token']) {
      return '';
    }

    const dataUser = this.getDataUser();
    return dataUser ? dataUser.empresaId : ''; 
  }

  getDataUser() {
    if (!localStorage['token']) {
      return '';
    }    
    return JSON.parse(atob(localStorage['token'].split('.')[1]));
  }

  getProfile() {
    if(!localStorage['token']){
      return '';
    }

    const dataUser = this.getDataUser();
    return dataUser ? dataUser.role : ''; 
  }
}
