import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EducationService } from '../../../services/education.service';
import { Router } from '@angular/router';
import { education } from '../../../dto/education';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrl: './add-education.component.css'
})
export class AddEducationComponent implements OnInit {
  @ViewChild('myform') myform!: NgForm;

  constructor(private service: EducationService, private router: Router) {}

  ngOnInit(): void {}

  addEducation(education: education): void {
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    this.service.addEducation(education).subscribe(
      () => {
        alert("Education Added Successfully!");
        this.router.navigate(['/viewEducation']);
      },
      (error) => {
        alert("An error occurred while adding the education.");
        console.error(error);
      }
    );
  }
}

