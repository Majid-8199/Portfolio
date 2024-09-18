import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { skill } from '../dto/skill';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient, private service:AdminService) { }

  private apiUrl:string = "https://portfoliobackend-qy84.onrender.com";
  public addSkill(skill: any){
    return this.http.post(`${this.apiUrl}/admin/addskill`, skill, {
      headers: this.createAuthorizationHeader(),});
  }

  public deleteSkill(id: number){
    return this.http.delete(`${this.apiUrl}/admin/deleteskill/${id}`, {
      headers: this.createAuthorizationHeader(),});
  }

  public updateSkill(id: number, skill: any){
    return this.http.put(`${this.apiUrl}/admin/updateskill/${id}`, skill, {
      headers: this.createAuthorizationHeader(),});
  }

  public getSkillById(id: number){
    return this.http.get(`${this.apiUrl}/all/getskill/${id}`);
  }

  public getAllSkills():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/all/getallskill`)
  }

  createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + this.service.getToken()
    )
  }
}
