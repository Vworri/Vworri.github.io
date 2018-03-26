import { Injectable } from '@angular/core';
import { Language } from './languages';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable()
export class LanguageService {
  private languagesUrl = 'http://localhost:5000/api/languages';
  constructor(
    private http: HttpClient) { }


  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.languagesUrl);
  }
  getLanguage(name: string): Observable<Language> {
    const encodedname = name.toLowerCase();
    const url = `${this.languagesUrl}/${encodedname}`;
    return this.http.get<Language>(url);
  }

}
