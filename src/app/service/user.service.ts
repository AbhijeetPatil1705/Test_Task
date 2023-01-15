import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  userSubject = new Subject<any>();
  constructor(private http:HttpClient) { }

  productData(data: any) {
    return this.http.post("http://localhost:3000/profileData", data);
  }

  getProductData() {
    return this.http.get("http://localhost:3000/profileData");
  }
  updateFormData(id: any, data: any) {
    return this.http.put(`http://localhost:3000/reactive/${id}`, data);
  }
  userDataSubject(data: any) {
    this.userSubject.next(data);
  }
}
