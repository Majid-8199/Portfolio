import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CertificationService } from '../../../services/certification.service';
import { certification } from '../../../dto/certification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-certification',
  templateUrl: './add-certification.component.html',
  styleUrl: './add-certification.component.css'
})
export class AddCertificationComponent implements OnInit {
  @ViewChild('myform') myform!: NgForm;

  constructor(private service: CertificationService, private router: Router) {}

  ngOnInit(): void {}

  addCertification(certification: certification): void {
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    this.service.addCertification(certification).subscribe(
      () => {
        alert("Certification Added Successfully!");
        this.router.navigate(['/viewCertification']);
      },
      (error) => {
        alert("An error occurred while adding the certification.");
        console.error(error);
      }
    );
  }
}
