import {Component, OnInit} from '@angular/core';
import {Skill} from '../skills';
import {SkillsService} from '../skills.service';
import {Directive, HostListener, HostBinding} from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbAccordionConfig]
})
export class HomeComponent implements OnInit {
  skills: Skill[] = [];
  private isOpen = false;
  constructor(config: NgbAccordionConfig,
    private skillService: SkillsService) {
      config.closeOthers = true;
      config.type = 'info';
  }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills);
  }
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  @HostListener('click')open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave')close() {
    this.isOpen = false;
  }

}
