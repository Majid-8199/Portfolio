import { Component, OnInit, ViewChild } from '@angular/core';
import { certification } from '../../../dto/certification';
import { NgForm } from '@angular/forms';
import { CertificationService } from '../../../services/certification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-certification',
  templateUrl: './update-certification.component.html',
  styleUrl: './update-certification.component.css'
})
export class UpdateCertificationComponent implements OnInit {
  CertificationId: number | null = null;
  certification!: any;

  @ViewChild('myform') myform!: NgForm;

  constructor(private service: CertificationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.CertificationId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.CertificationId) {
      this.service.getcertificationById(this.CertificationId).subscribe(
        (certification) => this.certification = certification,
        (error) => {
          console.error('Error fetching certification:', error);
          alert('An error occurred while fetching certification details.');
        }
      );
    }
  }

  updateCertificationById(id: number | null, certification: any): void {
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    if (id !== null) {
      this.service.updateCertification(id, certification).subscribe(
        () => {
          alert("Certification Updated Successfully!");
          this.router.navigate(['/viewCertification']);
        },
        (error) => {
          console.error('Error updating certification:', error);
          alert('An error occurred while updating the certification.');
        }
      );
    }
  }

  goBack(): void {
    this.router.navigate(["/viewCertification"]);
  }
}