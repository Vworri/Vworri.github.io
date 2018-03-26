import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillsDetailComponent } from './skills-detail/skills-detail.component';
import { HomeComponent } from './home/home.component';
import { LanguagesComponent } from './languages/languages.component';
import { LanguagesDetailComponent } from './languages-detail/languages-detail.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  {path: 'skills', component: SkillsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'lang', component: LanguagesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'lang/:name', component: LanguagesDetailComponent},
  {path: 'skill/:name', component: SkillsDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
