import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillsDetailComponent } from './skills-detail/skills-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'skills', component: SkillsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'detail/:name', component: SkillsDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
