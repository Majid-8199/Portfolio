import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SkillService } from '../../../services/skill.service';
import { AdminService } from '../../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrl: './update-skill.component.css'
})
export class UpdateSkillComponent implements OnInit{

  skillId:any;
  skill!:any;
  fileselected:boolean=false;

  imagePreview!:string|ArrayBuffer|null;

  constructor(private service:SkillService,  private router:Router, private route: ActivatedRoute){  }
  
  @ViewChild('myform') myform!:NgForm;

  ngOnInit(): void {
    this.skillId=this.route.snapshot.paramMap.get('id');
    this.skill=this.service.getSkillById(this.skillId).subscribe((e: any)=>this.skill=e);
  }
  
  updateSkill(id: number, skill: FormData){
    if (this.myform.invalid) {
      alert('Please fill out all required fields.');
    }
    else{
      this.service.updateSkill(id,skill).subscribe(()=>this.router.navigate(['/viewSkill']));
      alert("Skills Updated Successfully!");
    }
  }

  goBack(){
    this.router.navigate(["/viewSkill"]);
  }
}

