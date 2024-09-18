import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { education } from '../dto/education';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient, private service:AdminService) { }

  private apiUrl:string = "https://portfoliobackend-qy84.onrender.com";
  
  public addEducation(education: education){
    return this.http.post(`${this.apiUrl}/admin/addeducation`, education, {
      headers: this.createAuthorizationHeader(),});
  }

  public deleteEducation(id: number){
    return this.http.delete(`${this.apiUrl}/admin/deleteeducation/${id}`, {
      headers: this.createAuthorizationHeader(),});
  }

  public updateEducation(id: number, education: education){
    return this.http.put(`${this.apiUrl}/admin/updateeducation/${id}`, education, {
      headers: this.createAuthorizationHeader(),});
  }

  public getEducationById(id: number){
    return this.http.get(`${this.apiUrl}/all/geteducation/${id}`);
  }

  public getAllEducation(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/all/getalleducation`)
  }

  createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + this.service.getToken()
    )
  }
}
