import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Add this import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { SkillsComponent } from './user/skills/skills.component';
import { ProjectsComponent } from './user/projects/projects.component';
import { LoginComponent } from './user/login/login.component';
import { AdminheaderComponent } from './headers/adminheader/adminheader.component';
import { UserheaderComponent } from './headers/userheader/userheader.component';
import { AddCertificationComponent } from './admin/Certification/add-certification/add-certification.component';
import { UpdateCertificationComponent } from './admin/Certification/update-certification/update-certification.component';
import { ViewCertificationComponent } from './admin/Certification/view-certification/view-certification.component';
import { ViewEducationComponent } from './admin/Education/view-education/view-education.component';
import { UpdateEducationComponent } from './admin/Education/update-education/update-education.component';
import { AddEducationComponent } from './admin/Education/add-education/add-education.component';
import { AddExperienceComponent } from './admin/Experience/add-experience/add-experience.component';
import { UpdateExperienceComponent } from './admin/Experience/update-experience/update-experience.component';
import { ViewExperienceComponent } from './admin/Experience/view-experience/view-experience.component';
import { ViewProjectComponent } from './admin/Project/view-project/view-project.component';
import { AddProjectComponent } from './admin/Project/add-project/add-project.component';
import { UpdateProjectComponent } from './admin/Project/update-project/update-project.component';
import { UpdateSkillComponent } from './admin/Skill/update-skill/update-skill.component';
import { AddSkillComponent } from './admin/Skill/add-skill/add-skill.component';
import { ViewSkillComponent } from './admin/Skill/view-skill/view-skill.component';
import { UpdateAdminComponent } from './admin/User/update-admin/update-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { P1projectComponent } from './user/p1project/p1project.component';
import { P2projectComponent } from './user/p2project/p2project.component';
import { FooterComponent } from './headers/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    ProjectsComponent,
    LoginComponent,
    AdminheaderComponent,
    UserheaderComponent,
    AddCertificationComponent,
    UpdateCertificationComponent,
    ViewCertificationComponent,
    ViewEducationComponent,
    UpdateEducationComponent,
    AddEducationComponent,
    AddExperienceComponent,
    UpdateExperienceComponent,
    ViewExperienceComponent,
    ViewProjectComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    UpdateSkillComponent,
    AddSkillComponent,
    ViewSkillComponent,
    UpdateAdminComponent,
    P1projectComponent,
    P2projectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add this back to the imports array
    RouterModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }