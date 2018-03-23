import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsDetailComponent } from './skills-detail/skills-detail.component';
import { SkillsService} from './skills.service';
import { MessagesService } from './messages.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SkillsDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SkillsService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
