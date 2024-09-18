import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  isCustomerLoggedIn: boolean = this.service.isCustomerLoggedIn();
  isAdminLoggedIn: boolean = this.service.isAdminLoggedIn();
  
  constructor(private service: AdminService, private router: Router) {}
  
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isCustomerLoggedIn = this.service.isCustomerLoggedIn();
      this.isAdminLoggedIn = this.service.isAdminLoggedIn();
    });
  }
}
