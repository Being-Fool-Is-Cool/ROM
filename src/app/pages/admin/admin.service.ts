import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

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

  getAllCategory() {
    return this.http.get<any>(this.localUrl + "/category");
  }

  getOrderByTable(tableId: any) {
    return this.http.get<any>(this.localUrl + "/order/table?tableId=" + tableId);
  }
}
