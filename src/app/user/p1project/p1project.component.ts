// p1project.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-p1project',
  templateUrl: './p1project.component.html',
  styleUrls: ['./p1project.component.css']
})
export class P1projectComponent implements OnInit {
  projectId: any;
  project:any;

  constructor(private route: ActivatedRoute, private service:ProjectService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id');
    });
    this.service.getProjectById(this.projectId).subscribe(e=>{
      this.project=e;
      console.log(this.projectId)
      console.log(this.project);
    });
  }
}
