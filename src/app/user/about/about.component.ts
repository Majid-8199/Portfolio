import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';
import { CertificationService } from '../../services/certification.service';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  experiences:any;
  certifications:any;
  educations:any

  constructor(private experienceservice:ExperienceService, private certificationservice:CertificationService, private educationservice:EducationService,){}
  ngOnInit(): void {
    this.experienceservice.getAllExperiences().subscribe(e=>this.experiences=e);
    this.certificationservice.getAllCertifications().subscribe((e: any)=>this.certifications=e);
    this.educationservice.getAllEducation().subscribe(e=>this.educations=e);
  }

}
