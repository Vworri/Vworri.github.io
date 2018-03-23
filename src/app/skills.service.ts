import { Injectable } from '@angular/core';
import { Skill } from './skills';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json'})
};

@Injectable()
export class SkillsService {
  private skillsUrl = 'http://localhost:5000/api/skills';
  constructor(
    private http: HttpClient,
    private ms: MessagesService) { }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.skillsUrl);
  }
  getSkill(name: string): Observable<Skill> {
    const encodedname = name.toLowerCase();
    const url = `${this.skillsUrl}/${encodedname}`;
    return this.http.get<Skill>(url);
      }
}
