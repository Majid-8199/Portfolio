import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../../services/education.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-education',
  templateUrl: './view-education.component.html',
  styleUrl: './view-education.component.css'
})
export class ViewEducationComponent implements OnInit {
  educations: any[] = [];

  constructor(private service: EducationService, private router: Router) {}

  ngOnInit(): void {
    this.loadeducations();
  }

  loadeducations(): void {
    this.service.getAllEducation().subscribe(
      (data) => {
        this.educations = data;
      },
      (error) => {
        console.error('Error fetching educations:', error);
        alert('An error occurred while loading educations.');
      }
    );
  }

  deleteEducationById(id: number): void {
    if (confirm('Are you sure you want to delete this educations?')) {
      this.service.deleteEducation(id).subscribe(
        () => {
          alert('Education deleted successfully.');
          this.educations = this.educations.filter(edu => edu.id !== id);
        },
        (error) => {
          console.error('Error deleting education:', error);
          alert('An error occurred while deleting the educations.');
        }
      );
    }
  }

  updateEducationById(id: number): void {
    this.router.navigate(['/updateEducation', id]);
  }

  addEducation(): void {
    this.router.navigate(['/addEducation']);
  }
}

