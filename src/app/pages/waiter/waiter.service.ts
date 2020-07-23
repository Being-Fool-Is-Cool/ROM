import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WaiterService {

  private readonly headers:HttpHeaders;
  private localUrl = 'http://localhost:8080/v1';

  constructor(private http: HttpClient) {
    this.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      });
   }

   getAllTableDetail() {
    return this.http.get(this.localUrl + "/table");
  }

  getAllItemsDetails() {
    return this.http.get(this.localUrl + '/item');
  }
}
