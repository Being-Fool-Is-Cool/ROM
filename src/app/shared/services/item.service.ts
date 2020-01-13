import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly headers:HttpHeaders;
    
    constructor(private http: HttpClient) {
        this.headers=new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        });
    }

   getItemCategory(partnerId: string) {
    return this.http.get<any>( "", {headers: this.headers});
  }

  saveItem(reqObj: any) {
    return this.http.post<any>( '', reqObj, {headers: this.headers}); 
  }
}
