import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OmdService {

  constructor(private http:HttpClient) { }

  getOmdMovie(url:any){
    return this.http.get<any>(url);
  }
}
