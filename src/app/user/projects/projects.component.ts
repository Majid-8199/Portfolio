import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: any;

  constructor(private service: ProjectService) {}

  ngOnInit(): void {
    this.service.getAllProjects().subscribe(project => {
      this.projects = project;
      console.log(this.projects);
    });
  }
}