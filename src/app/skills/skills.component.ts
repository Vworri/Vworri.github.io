import { Component, OnInit } from '@angular/core';
import { Skill } from '../skills';
import { SkillsService } from '../skills.service';
import { SkillsDetailComponent } from '../skills-detail/skills-detail.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  selectedSkill: Skill;
  constructor(private skillsService: SkillsService) { }


  getSkills(): void {
    this.skillsService.getSkills()
      .subscribe(skills => this.skills = skills);
  }
  ngOnInit() {
    this.getSkills();
  }

  onSelectDetail(skill: Skill): void {
    this.selectedSkill = skill;
  }
  onSelectCard(skill: Skill) {
    this.selectedSkill = null;
  }

}
