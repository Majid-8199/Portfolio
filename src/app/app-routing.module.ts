import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCertificationComponent } from './admin/Certification/add-certification/add-certification.component';
import { AddExperienceComponent } from './admin/Experience/add-experience/add-experience.component';
import { AddEducationComponent } from './admin/Education/add-education/add-education.component';
import { AddSkillComponent } from './admin/Skill/add-skill/add-skill.component';
import { AddProjectComponent } from './admin/Project/add-project/add-project.component';
import { UpdateProjectComponent } from './admin/Project/update-project/update-project.component';
import { UpdateCertificationComponent } from './admin/Certification/update-certification/update-certification.component';
import { UpdateExperienceComponent } from './admin/Experience/update-experience/update-experience.component';
import { UpdateSkillComponent } from './admin/Skill/update-skill/update-skill.component';
import { ViewCertificationComponent } from './admin/Certification/view-certification/view-certification.component';
import { ViewExperienceComponent } from './admin/Experience/view-experience/view-experience.component';
import { ViewEducationComponent } from './admin/Education/view-education/view-education.component';
import { ViewSkillComponent } from './admin/Skill/view-skill/view-skill.component';
import { ViewProjectComponent } from './admin/Project/view-project/view-project.component';
import { AboutComponent } from './user/about/about.component';
import { ProjectsComponent } from './user/projects/projects.component';
import { SkillsComponent } from './user/skills/skills.component';
import { ContactComponent } from './user/contact/contact.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { P1projectComponent } from './user/p1project/p1project.component';
import { P2projectComponent } from './user/p2project/p2project.component';
import { UpdateAdminComponent } from './admin/User/update-admin/update-admin.component';
import { UpdateEducationComponent } from './admin/Education/update-education/update-education.component';

const routes: Routes = [
  { path: 'addCertification', component: AddCertificationComponent },
  { path: 'addExperience', component: AddExperienceComponent}  ,
  { path: 'addEducation', component: AddEducationComponent},
  { path: 'addSkill', component: AddSkillComponent},
  { path: 'addProject', component: AddProjectComponent},
  { path: 'updateCertification/:id', component: UpdateCertificationComponent },
  { path: 'updateExperience/:id', component: UpdateExperienceComponent}  ,
  { path: 'updateEducation/:id', component: UpdateEducationComponent},
  { path: 'updateSkill/:id', component: UpdateSkillComponent},
  { path: 'updateProject/:id', component: UpdateProjectComponent},
  { path: 'viewCertification', component: ViewCertificationComponent },
  { path: 'viewExperience', component: ViewExperienceComponent}  ,
  { path: 'viewEducation', component: ViewEducationComponent},
  { path: 'viewSkill', component: ViewSkillComponent},
  { path: 'viewProject', component: ViewProjectComponent},
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent}  ,
  { path: 'projects', component: ProjectsComponent},
  { path: 'p1/:id', component: P1projectComponent},
  { path: 'p2/:id', component: P2projectComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'updateAdmin', component: UpdateAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
