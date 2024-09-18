import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { admin } from '../dto/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  TOKEN = 'ecom-token';
  USER = 'ecom-user';

  private apiUrl:string = "${backend_api}";
  

  constructor( private http:HttpClient, @Inject(PLATFORM_ID) private platformId: object) { }

  public updateUser(user: any){
    return this.http.put(`${this.apiUrl}/admin/updateuser`, user,{
      headers: this.createAuthorizationHeader(),});
  }

  public saveToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.removeItem(this.TOKEN);
      window.localStorage.setItem(this.TOKEN, token);
    }
  }

  public saveUser(user: admin) {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.removeItem(this.USER);
      window.localStorage.setItem(this.USER, JSON.stringify(user));
    }
  }

  public getToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.TOKEN);
    }
    return null;
  }

  public getUser() {
    if (isPlatformBrowser(this.platformId)) {
      const user = window.localStorage.getItem(this.USER);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  public getUserId() {
    const user = this.getUser();
    if (user == null) {
      return '';
    }
    return user.id;
  }

  public getUserRole() {
    const user = this.getUser();
    if (user == null) {
      return '';
    }
    return user.role;
  }

  public isAdminLoggedIn() {
    if (!this.getToken()) {
      return false;
    }
    const role = this.getUserRole();
    return role === 'Admin';
  }

  public isCustomerLoggedIn() {
    if (!this.getToken()) {
      return false;
    }
    const role = this.getUserRole();
    return role === 'User';
  }

  public logOut() {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.removeItem(this.TOKEN);
      window.localStorage.removeItem(this.USER);
    }
  }

  
  public refreshToken() {
    return this.http.post(`${this.apiUrl}/all/refresh`, {
      refreshToken: this.getToken()
    });
  }

  public startAutoRefresh() {
    const tokenExpiryTime = this.getTokenExpiryTime(); // Method to extract expiry time from the token
    const refreshTime = tokenExpiryTime - Date.now() - (5 * 60 * 1000); // 5 minutes before expiry
  
    setTimeout(() => {
      this.refreshToken().subscribe({
        next: (res: any) => {
          this.saveToken(res.token);
          this.startAutoRefresh(); // Restart the refresh cycle
        },
        error: (err: any) => {
          console.error('Token refresh failed:', err);
          this.logOut(); // Log out if token refresh fails
        }
      });
    }, refreshTime);
  }
  
  private getTokenExpiryTime(): number {
    const token = this.getToken();
    // Parse token to get expiry time (typically JWT token)
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken.exp * 1000; // Expiry time is typically in seconds, convert to milliseconds
    }
    return 0;
  }
  

  createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + this.getToken()
    )
  }
}
