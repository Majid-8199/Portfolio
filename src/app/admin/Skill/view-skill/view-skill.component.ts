import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../../services/skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-skill',
  templateUrl: './view-skill.component.html',
  styleUrl: './view-skill.component.css'
})
export class ViewSkillComponent implements OnInit {
  skills: any[] = [];

  constructor(private service: SkillService, private router: Router) {}

  ngOnInit(): void {
    this.loadskills();
  }

  loadskills(): void {
    this.service.getAllSkills().subscribe(
      (data) => {
        this.skills = data;
      },
      (error) => {
        console.error('Error fetching skills:', error);
        alert('An error occurred while loading skills.');
      }
    );
  }

  deleteSkillById(id: number): void {
    if (confirm('Are you sure you want to delete this skill?')) {
      this.service.deleteSkill(id).subscribe(
        () => {
          alert('Skill deleted successfully.');
          this.skills = this.skills.filter(skill => skill.id !== id);
        },
        (error) => {
          console.error('Error deleting skill:', error);
          alert('An error occurred while deleting the skill.');
        }
      );
    }
  }

  updateSkillById(id: number): void {
    this.router.navigate(['/updateSkill', id]);
  }

  addSkill(): void {
    this.router.navigate(['/addSkill']);
  }
}

