import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const USERNAME = 'USERNAME';
const PASSWORD = 'PASSWORD';
const ROLE = "ROLE";
const IMAGE = "IMAGE";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  setToken(userName: string, password: string) {
    localStorage.setItem(USERNAME, userName);
    localStorage.setItem(PASSWORD, password);
    localStorage.setItem(ROLE, "Developer");
    localStorage.setItem(IMAGE, 'assets/images/avatar.jpg');
  }

  getUserName() {
    return localStorage.getItem(USERNAME);
  }
}
