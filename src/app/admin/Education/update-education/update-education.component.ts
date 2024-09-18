import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EducationService } from '../../../services/education.service';
import { ActivatedRoute, Router } from '@angular/router';
import { education } from '../../../dto/education';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrl: './update-education.component.css'
})
export class UpdateEducationComponent implements OnInit {
  EducationId: number | null = null;
  education!: any;

  @ViewChild('myform') myform!: NgForm;

  constructor(private service: EducationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.EducationId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.EducationId) {
      this.service.getEducationById(this.EducationId).subscribe(
        (certification) => this.education = certification,
        (error) => {
          console.error('Error fetching education:', error);
          alert('An error occurred while fetching education details.');
        }
      );
    }
  }

  updateEducationById(id: number | null, education: education): void {
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    if (id !== null) {
      this.service.updateEducation(id, education).subscribe(
        () => {
          alert("Education Updated Successfully!");
          this.router.navigate(['/viewEducation']);
        },
        (error) => {
          console.error('Error updating education:', error);
          alert('An error occurred while updating the education.');
        }
      );
    }
  }

  goBack(): void {
    this.router.navigate(["/vieweducation"]);
  }
}