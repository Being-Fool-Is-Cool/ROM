import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CookService {

  private readonly headers:HttpHeaders;
  private localUrl = 'http://localhost:8080/v1';

  constructor(private http: HttpClient) {
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      });
   }

   getAllOrders() {
     return this.http.get(this.localUrl + '/order');
   }
}
