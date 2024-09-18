import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CertificationService } from '../../../services/certification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceService } from '../../../services/experience.service';
import { experience } from '../../../dto/experience';

@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrl: './update-experience.component.css'
})
export class UpdateExperienceComponent implements OnInit {
  ExperienceId: number | null = null;
  experience!: any;

  @ViewChild('myform') myform!: NgForm;

  constructor(private service: ExperienceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ExperienceId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.ExperienceId) {
      this.service.getExperienceById(this.ExperienceId).subscribe(
        (experience) => this.experience = experience,
        (error) => {
          console.error('Error fetching experience:', error);
          alert('An error occurred while fetching experience details.');
        }
      );
    }
  }

  updateExperienceById(id: number | null, experience: experience): void {
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    if (id !== null) {
      this.service.updateExperience(id, experience).subscribe(
        () => {
          alert("Experience Updated Successfully!");
          this.router.navigate(['/viewExperience']);
        },
        (error) => {
          console.error('Error updating experience:', error);
          alert('An error occurred while updating the experience.');
        }
      );
    }
  }

  goBack(): void {
    this.router.navigate(["/viewExperience"]);
  }
}