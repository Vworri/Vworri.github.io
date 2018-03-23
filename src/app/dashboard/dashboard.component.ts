import { Component, OnInit } from '@angular/core';
import {Skill} from '../skills';
import { SkillsService } from '../skills.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  skills: Skill[] = [];
  selectedSkill: Skill;
  constructor(private skillService: SkillsService) { }

  ngOnInit() {
    this.getSkills();
  }
  getSkills(): void {
    this.skillService.getSkills()
    .subscribe(skills => this.skills = skills);
  }
  onSelect(skill: Skill): void {
    this.selectedSkill = skill;
  }

}
