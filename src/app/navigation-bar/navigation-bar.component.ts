import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { Skill } from '../skills';
import { Language } from '../languages';
import { LanguageService } from '../language.service';
// import {Directive, HostListener, HostBinding} from '@angular/core';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  skills: Skill[] ;
  languages: Language[];

  constructor(private skillService: SkillsService,
  private languageService: LanguageService) { }
  ngOnInit() {
    this.getSkills();
    this.getLanguages();
  }
  getSkills(): void {
    this.skillService.getSkills()
    .subscribe(skills => this.skills = skills);
  }
  getLanguages(): void {
    this.languageService.getLanguages()
    .subscribe(languages => this.languages = languages);
  }

}
