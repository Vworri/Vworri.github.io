import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsDetailComponent } from './skills-detail/skills-detail.component';
import { SkillsService} from './skills.service';
import { MessagesService } from './messages.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LanguagesComponent } from './languages/languages.component';
import { LanguageService } from './language.service';
import { LanguagesDetailComponent } from './languages-detail/languages-detail.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { PortfolioService } from './portfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SkillsDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HomeComponent,
    NavigationBarComponent,
    FooterComponent,
    LanguagesComponent,
    LanguagesDetailComponent,
    PortfolioComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [SkillsService, MessagesService, LanguageService, PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
