import { Component, OnInit } from '@angular/core';
import { Skill } from '../skills';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  skills: Skill[] = [];
  constructor(private skillService: SkillsService) { }

  ngOnInit() {
    this.getSkills();
  }
  getSkills(): void {
    this.skillService.getSkills()
    .subscribe(skills => this.skills = skills);
  }
}
