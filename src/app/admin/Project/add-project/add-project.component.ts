import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent implements OnInit {

  @ViewChild('myform') 
  myform!: NgForm;
  imagePreview!: string | ArrayBuffer | null;
  selectedFile!: File;
  features: { id?: number; heading: string; description: string }[] = [];
  screenshots: { id?: number; file: File; preview: string | ArrayBuffer | null }[] = [];

  constructor(private service: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.addFeature(); // Start with one empty feature input
    this.addScreenshot(); // Start with one empty screenshot input
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.previewImage(this.selectedFile, (result) => this.imagePreview = result);
  }

  onScreenshotSelected(event: any, index: number): void {
    const file = event.target.files[0];
    this.screenshots[index].file = file;
    this.previewImage(file, (result) => this.screenshots[index].preview = result);
  }

  previewImage(file: File, callback: (result: string | ArrayBuffer | null) => void): void {
    const reader = new FileReader();
    reader.onload = () => {
      callback(reader.result);
    }
    reader.readAsDataURL(file);
  }

  addFeature(): void {
    this.features.push({ heading: '', description: '' });
  }

  removeFeature(index: number): void {
    const featureId = this.features[index].id; // Assuming each feature has a unique 'id'
    if (featureId) {
      this.service.deleteFeature(featureId).subscribe({
        next: () => {
          this.features.splice(index, 1);
          console.log("Feature deleted successfully from the database.");
        },
        error: (error) => {
          console.error("An error occurred while deleting the feature:", error);
        }
      });
    } else {
      this.features.splice(index, 1); // Just remove from UI if not yet saved to the database
    }
  }

  addScreenshot(): void {
    this.screenshots.push({ file: null!, preview: null });
  }

  removeScreenshot(index: number): void {
    const screenshotId = this.screenshots[index].id; // Assuming each screenshot has a unique 'id'
    if (screenshotId) {
      this.service.deleteScreenshot(screenshotId).subscribe({
        next: () => {
          this.screenshots.splice(index, 1);
          console.log("Screenshot deleted successfully from the database.");
        },
        error: (error) => {
          console.error("An error occurred while deleting the screenshot:", error);
        }
      });
    } else {
      this.screenshots.splice(index, 1); // Just remove from UI if not yet saved to the database
    }
  }

  onSubmit(): void {
    if (this.myform.invalid) {
      alert("Please fill out all required fields.");
      return;
    }

    const projectData = new FormData();
    projectData.append('img', this.selectedFile);
    projectData.append('name', this.myform.value.name);
    projectData.append('largedescription', this.myform.value.largedescription);
    projectData.append('smalldescription', this.myform.value.smalldescription);
    projectData.append('techstack', this.myform.value.techstack);
    console.log(projectData);
    this.service.addProject(projectData).subscribe({
      next: () => {
        alert("Project Added Successfully!");
        this.addFeatures();
        this.addScreenshots();
        this.router.navigate(["/viewProject"]);
      },
      error: (error) => {
        alert("An error occurred while adding the project.");
        console.error(error);
      }
    });
  }

  addFeatures(): void {
    for (const feature of this.features) {
      this.service.addFeature(this.myform.value.name, feature).subscribe({
        next: () => console.log("Feature added successfully"),
        error: (error) => console.error("An error occurred while adding the feature:", error)
      });
    }
  }

  addScreenshots(): void {
    for (const screenshot of this.screenshots) {
      const screenshotData = new FormData();
      screenshotData.append('img', screenshot.file);
      screenshotData.append('projectName', this.myform.value.name);

      this.service.addScreenshot(this.myform.value.name, screenshotData).subscribe({
        next: () => console.log("Screenshot added successfully"),
        error: (error) => console.error("An error occurred while adding the screenshot:", error)
      });
    }
  }
}
