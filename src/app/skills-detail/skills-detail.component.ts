import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../skills';


@Component({
  selector: 'app-skills-detail',
  templateUrl: './skills-detail.component.html',
  styleUrls: ['./skills-detail.component.css']
})
export class SkillsDetailComponent implements OnInit {
  @Input() skill: Skill;
  constructor() { }

  ngOnInit() {
  }

}
