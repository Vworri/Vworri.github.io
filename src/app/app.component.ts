import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { Skill } from './skills';
import {Directive, HostListener, HostBinding} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  skills: Skill[] ;
  private isOpen  = false;
  constructor(private skillService: SkillsService) { }
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
