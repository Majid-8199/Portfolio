import { Component, OnInit } from '@angular/core';
import { CertificationService } from '../../../services/certification.service';
import { Router } from '@angular/router';
import { ExperienceService } from '../../../services/experience.service';

@Component({
  selector: 'app-view-experience',
  templateUrl: './view-experience.component.html',
  styleUrl: './view-experience.component.css'
})
export class ViewExperienceComponent implements OnInit {
  experiences: any[] = [];

  constructor(private service: ExperienceService, private router: Router) {}

  ngOnInit(): void {
    this.loadExperiences();
  }

  loadExperiences(): void {
    this.service.getAllExperiences().subscribe(
      (data) => {
        this.experiences = data;
      },
      (error) => {
        console.error('Error fetching experiences:', error);
        alert('An error occurred while loading experiences.');
      }
    );
  }

  deleteExperienceById(id: number): void {
    if (confirm('Are you sure you want to delete this experience?')) {
      this.service.deleteExperience(id).subscribe(
        () => {
          alert('Experience deleted successfully.');
          this.experiences = this.experiences.filter(cert => cert.id !== id);
        },
        (error) => {
          console.error('Error deleting experience:', error);
          alert('An error occurred while deleting the experience.');
        }
      );
    }
  }

  updateExperienceById(id: number): void {
    this.router.navigate(['/updateExperience', id]);
  }

  addExperience(): void {
    this.router.navigate(['/addExperience']);
  }
}
