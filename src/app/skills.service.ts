import { Injectable } from '@angular/core';
import { Skill } from './skills';
import { Skills } from './mock-skills';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessagesService } from './messages.service';
@Injectable()
export class SkillsService {
  constructor(private ms: MessagesService) { }
  getSkills(): Observable<Skill[]> {
    this.ms.add('Do you like to dance?');
    return of(Skills);
  }
}
