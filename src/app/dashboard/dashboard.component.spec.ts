import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from '../skills/skills.component';
import { HomeComponent } from '../home/home.component';
import { LanguagesComponent } from '../languages/languages.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
