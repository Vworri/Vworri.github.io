import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../skills';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills-detail',
  templateUrl: './skills-detail.component.html',
  styleUrls: ['./skills-detail.component.css']
})
export class SkillsDetailComponent implements OnInit {
  @Input() skill: Skill;
  constructor(
    private route: ActivatedRoute,
    private skillService: SkillsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(() => { this.getSkill(); } );
  }
  getSkill(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.skillService.getSkill(name)
    .subscribe(skill => this.skill = skill);
  }

}
