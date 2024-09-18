import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any;
  leftCategories: string[] = ['PROGRAMMING LANGUAGES', 'WEB TECHNOLOGIES', 'DATABASE MANAGEMENT SYSTEMS'];
  rightCategories: string[] = ['FRAMEWORKS AND LIBRARIES', 'IDE’s AND OTHER TOOLS'];

  constructor(private service: SkillService) {}

  ngOnInit(): void {
    this.service.getAllSkills().subscribe(skills => {
      this.skills = skills;
      console.log(this.skills);
    });
  }

  getSkillsByCategory(category: string): any[] {
    return this.skills ? this.skills.filter((skill: { category: string; }) => skill.category === category) : [];
  }
}