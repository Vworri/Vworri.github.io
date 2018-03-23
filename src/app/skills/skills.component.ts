import { Component, OnInit } from '@angular/core';
import { Skill } from '../skills';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] ;
  getSkills(): void {
    this.skillsService.getSkills()
    .subscribe(skills => this.skills = skills);
  }
  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.getSkills();
  }

}
