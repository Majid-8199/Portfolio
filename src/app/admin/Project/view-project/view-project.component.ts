import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrl: './view-project.component.css'
})
export class ViewProjectComponent implements OnInit {
  projects: any[] = [];

  constructor(private service: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.service.getAllProjects().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error fetching experiences:', error);
        alert('An error occurred while loading projects.');
      }
    );
  }

  deleteProjectById(id: number): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.service.deleteProject(id).subscribe(
        () => {
          alert('Project deleted successfully.');
          this.projects = this.projects.filter(project => project.id !== id);
        },
        (error) => {
          console.error('Error deleting project:', error);
          alert('An error occurred while deleting the project.');
        }
      );
    }
  }

  updateProjectById(id: number): void {
    this.router.navigate(['/updateProject', id]);
  }

  addProject(): void {
    this.router.navigate(['/addProject']);
  }
}

