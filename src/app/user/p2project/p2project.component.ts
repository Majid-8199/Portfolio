import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-p2project',
  templateUrl: './p2project.component.html',
  styleUrl: './p2project.component.css'
})
export class P2projectComponent implements OnInit {
  projectId: any;
  project:any;

  constructor(private route: ActivatedRoute , private service:ProjectService) { }

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
