import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { loginrequest } from '../dto/loginrequest';
import { contact } from '../dto/contact';
import { admin } from '../dto/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:string = "https://portfoliobackend-qy84.onrender.com/all";
  constructor(private http: HttpClient) {}

  public getUserDetails() {
    return this.http.get(`${this.apiUrl}/getuser`);
  }

  public login(login: loginrequest): Observable<jwtrequest> {
    return this.http.post<jwtrequest>(`${this.apiUrl}/login`, login);
  }

  public downloadCV(id: number) {
    return this.http.get(`${this.apiUrl}/download/${id}`, { responseType: 'blob' });
  }

  public sendmail(contact: contact) {
    return this.http.post(`${this.apiUrl}/sendmail`, contact);
  }

}

export interface jwtrequest {
  token: string;
  refreshToken: string;
  admin: admin;
}
