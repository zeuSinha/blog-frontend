import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = `http://localhost:3000`;
  private userData: any;

  constructor(
    private http: HttpClient
    ) { }

  public setUserData(data) {
    this.userData = data;
  }

  public getUserData() {
    const data =  this.userData;
    return data;
  }

  public postBlog(data): Observable<any> {
    return this.http.post(`${this.baseUrl}/post?authToken=${this.userData.authToken}`, data);
  }

  public getAllBlogs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  public signup(data): Observable<any> {
    const params = new HttpParams()
      .set('name', data.name)
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.baseUrl}/signup`, params);
  }

  public login(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.baseUrl}/login`, params);
  }
}
