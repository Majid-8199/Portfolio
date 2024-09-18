import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrl: './update-project.component.css'
})
export class UpdateProjectComponent implements OnInit{

  projectId:any;
  project!:any;
  fileselected:boolean=false;

  imagePreview!:string|ArrayBuffer|null;

  constructor(private service:ProjectService, private router:Router, private route: ActivatedRoute){  }
  
  @ViewChild('myform') myform!:NgForm;

  ngOnInit(): void {
    this.projectId=this.route.snapshot.paramMap.get('id');
    this.project=this.service.getProjectById(this.projectId).subscribe((e)=>this.project=e);
    
  }
  
  updateProject(id: number, project: FormData){
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
    }
    else{
      this.service.updateProject(id,project).subscribe(()=>this.router.navigate(['/viewProject']));
      alert("Project Updated Successfully!");
    }
  }

  goBack(){
    this.router.navigate(["/viewProject"]);
  }
}

