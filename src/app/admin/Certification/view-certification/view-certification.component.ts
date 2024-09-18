import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificationService } from '../../../services/certification.service';

@Component({
  selector: 'app-certification-view',
  templateUrl: './view-certification.component.html',
  styleUrls: ['./view-certification.component.css']
})
export class ViewCertificationComponent implements OnInit {
  certifications: any[] = [];

  constructor(private service: CertificationService, private router: Router) {}

  ngOnInit(): void {
    this.loadCertifications();
  }

  loadCertifications(): void {
    this.service.getAllCertifications().subscribe(
      (data) => {
        this.certifications = data;
      },
      (error) => {
        console.error('Error fetching certifications:', error);
        alert('An error occurred while loading certifications.');
      }
    );
  }

  deleteCertificationById(id: number): void {
    if (confirm('Are you sure you want to delete this certification?')) {
      this.service.deleteCertification(id).subscribe(
        () => {
          alert('Certification deleted successfully.');
          this.certifications = this.certifications.filter(cert => cert.id !== id);
        },
        (error) => {
          console.error('Error deleting certification:', error);
          alert('An error occurred while deleting the certification.');
        }
      );
    }
  }

  updateCertificationById(id: number): void {
    this.router.navigate(['/updateCertification', id]);
  }

  addCertification(): void {
    this.router.navigate(['/addCertification']);
  }
}
