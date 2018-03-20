import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsDetailComponent } from './skills-detail/skills-detail.component';
import { SkillsService} from './skills.service';
import { MessagesService } from './messages.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SkillsDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SkillsService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
