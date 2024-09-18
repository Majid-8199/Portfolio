import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrl: './update-admin.component.css'
})
export class UpdateAdminComponent implements OnInit {
  user!: any;

  @ViewChild('myform') myform!: NgForm;

  constructor(private service: UserService, private adminservice: AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.service.getUserDetails().subscribe(
        (user) => this.user = user,
        (error) => {
          console.error('Error fetching details:', error);
          alert('An error occurred while fetching details.');
        }
      );
    }

  updateUser(user: any): void {
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    this.adminservice.updateUser(user).subscribe(
      () => {
        alert("User Details Updated Successfully!");
        this.router.navigate(['/viewExperience']);
      },
      (error) => {
        console.error('Error updating user details:', error);
        alert('An error occurred while updating the user details.');
      }
    );
  }

  goBack(): void {
    this.router.navigate(["/viewExperience"]);
  }
}

