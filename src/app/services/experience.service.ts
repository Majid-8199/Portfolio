import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { experience } from '../dto/experience';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http:HttpClient, private service:AdminService) { }

  private apiUrl:string = "https://portfoliobackend-kb5d.onrender.com";
  
  public addExperience(experience: experience){
    return this.http.post(`${this.apiUrl}/admin/addexperience`, experience, {
      headers: this.createAuthorizationHeader(),});
  }

  public deleteExperience(id: number){
    return this.http.delete(`${this.apiUrl}/admin/deleteexperience/${id}`, {
      headers: this.createAuthorizationHeader(),});
  }

  public updateExperience(id: number, experience: experience){
    return this.http.put(`${this.apiUrl}/admin/updateexperience/${id}`, experience, {
      headers: this.createAuthorizationHeader(),});
  }

  public getExperienceById(id: number){
    return this.http.get(`${this.apiUrl}/all/getexperience/${id}`);
  }

  public getAllExperiences(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/all/getallexperience`)
  }

  createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + this.service.getToken()
    )
  }
}
