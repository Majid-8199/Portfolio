import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SkillService } from '../../../services/skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrl: './add-skill.component.css'
})
export class AddSkillComponent implements OnInit {

  @ViewChild('myform') 
  myform!: NgForm;
  imagePreview!: string | ArrayBuffer | null;
  selectedFile!: File;

  constructor(private service: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.previewImage(this.selectedFile, (result) => this.imagePreview = result);
  }

  previewImage(file: File, callback: (result: string | ArrayBuffer | null) => void): void {
    const reader = new FileReader();
    reader.onload = () => {
      callback(reader.result);
    }
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    if (this.myform.invalid) {
      alert("Please fill out all required fields.");
      return;
    }

    const projectData = new FormData();
    projectData.append('img', this.selectedFile);
    projectData.append('name', this.myform.value.name);
    projectData.append('category', this.myform.value.category);
    console.log(projectData)
    this.service.addSkill(projectData).subscribe({
      next: () => {
        alert("Skill Added Successfully!");
        this.router.navigate(["/viewSkill"]);
      },
      error: (error) => {
        alert("An error occurred while adding the skill.");
        console.error(error);
      }
    });
  }
}

