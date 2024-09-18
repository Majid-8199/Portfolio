import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{ 

  @ViewChild('myform') myform!: NgForm;

  user:any;
  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {
    this.service.getUserDetails().subscribe(e=>this.user=e);
  }

  sendMail(contact:any){
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    this.service.sendmail(contact).subscribe(
      () => {
        alert("Mail Send Successfully!");
      },
      (error) => {
        alert("An error occurred while sending!");
        console.error(error);
      }
    );
  }

}
