import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { loginrequest } from '../../dto/loginrequest';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit {
  @ViewChild('myform') myform!: NgForm;

  constructor(private service: UserService, private adminservice: AdminService, private router:Router) {}

  ngOnInit(): void {}

  login(login:loginrequest){
    if(this.myform.invalid){
      alert('Please fill out all required fields.')
    }else{
      this.service.login(login).subscribe({
        next:(res)=>{
          this.adminservice.saveToken(res.token);
          this.adminservice.saveUser(res.admin)
          this.adminservice.startAutoRefresh();

          alert('Logged In succuessfully');
          if(this.adminservice.isAdminLoggedIn()){
            this.router.navigate(['/viewExperience'])
          } else if(this.adminservice.isCustomerLoggedIn()){
            this.router.navigate([''])
          }
      },
      error:(error)=>{
        alert('Login failed. Please check your credentials and try again.');
      }
    });
      
    }
  }
}
