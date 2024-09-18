import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { project } from '../dto/project';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient, private service:AdminService) { }

  private apiUrl:string = "https://portfoliobackend-qy84.onrender.com";
  
  public addProject(project: FormData){
    return this.http.post(`${this.apiUrl}/admin/addproject`, project, {
      headers: this.createAuthorizationHeader(),});
  }

  public deleteProject(id: number){
    return this.http.delete(`${this.apiUrl}/admin/deleteproject/${id}`, {
      headers: this.createAuthorizationHeader(),});
  }

  public updateProject(id: number, project: any){
    return this.http.put(`${this.apiUrl}/admin/updateproject/${id}`, project, {
      headers: this.createAuthorizationHeader(),});
  }

  public getProjectById(id: number){
    return this.http.get(`${this.apiUrl}/all/getproject/id/${id}`);
  }

  public getProjectByName(name: string){
    return this.http.get(`${this.apiUrl}/all/getproject/name/${name}`);
  }

  public getAllProjects():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/all/getallproject`)
  }

  public addFeature(name: string, feature: any){
    return this.http.post(`${this.apiUrl}/admin/addfeature/${name}`, feature, {
      headers: this.createAuthorizationHeader(),});
  }

  public deleteFeature(id: number){
    return this.http.delete(`${this.apiUrl}/admin/deletefeature/${id}`, {
      headers: this.createAuthorizationHeader(),});
  }

  public addScreenshot(name: string, screenshot: any){
    return this.http.post(`${this.apiUrl}/admin/addscreenshot/${name}`, screenshot, {
      headers: this.createAuthorizationHeader(),});
  }

  public deleteScreenshot(id: number){
    return this.http.delete(`${this.apiUrl}/admin/deletescreenshot/${id}`, {
      headers: this.createAuthorizationHeader(),});
  }

  createAuthorizationHeader(): HttpHeaders {
    const token = this.service.getToken();
    console.log(`Setting Authorization header with token: ${token}`);
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}
