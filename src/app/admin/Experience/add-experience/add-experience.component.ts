import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExperienceService } from '../../../services/experience.service';
import { Router } from '@angular/router';
import { experience } from '../../../dto/experience';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrl: './add-experience.component.css'
})
export class AddExperienceComponent implements OnInit {
  @ViewChild('myform') myform!: NgForm;

  constructor(private service: ExperienceService, private router: Router) {}

  ngOnInit(): void {}

  addExperience(experience: experience): void {
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    this.service.addExperience(experience).subscribe(
      () => {
        alert("Education Added Successfully!");
        this.router.navigate(['/viewExperience']);
      },
      (error) => {
        alert("An error occurred while adding the experience.");
        console.error(error);
      }
    );
  }
}


