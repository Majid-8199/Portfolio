import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { certification } from '../dto/certification';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http:HttpClient, private service:AdminService) { }

  private apiUrl:string = "https://portfoliobackend-qy84.onrender.com";
  
  public addCertification(certification: certification){
    return this.http.post(`${this.apiUrl}/admin/addcertification`, certification, {
      headers: this.createAuthorizationHeader(),});
  }

  public deleteCertification(id: number){
    return this.http.delete(`${this.apiUrl}/admin/deletecertification/${id}`, {
      headers: this.createAuthorizationHeader(),});
  }

  public updateCertification(id: number, certification: any){
    return this.http.put(`${this.apiUrl}/admin/updatecertification/${id}`, certification, {
      headers: this.createAuthorizationHeader(),});
  }

  public getcertificationById(id: number){
    return this.http.get(`${this.apiUrl}/all/getcertification/${id}`);
  }

  public getAllCertifications(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/all/getallcertification`)
  }

  createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + this.service.getToken()
    )
  }

}
