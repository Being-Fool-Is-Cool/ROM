import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const USERNAME = 'USERNAME';
const PASSWORD = 'PASSWORD';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  setToken(userName: string, password: string) {
    localStorage.setItem(USERNAME, userName);
    localStorage.setItem(PASSWORD, password);
  }

  getUserName() {
    return localStorage.getItem(USERNAME);
  }
}
