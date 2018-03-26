import { Injectable } from '@angular/core';
import { Project } from './portfolio';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'applications/json'})
};

@Injectable()
export class PortfolioService {
private portfolioUrl = 'http://localhost:5000/api/project';
  constructor(private http: HttpClient) { }
getPortfolio(): Observable<Project[]> {
  return this.http.get<Project[]>(this.portfolioUrl);
}
filterPortfolio(tags: string[]): Observable<Project[]> {
  let encodedList = [];
    tags.forEach( function(tag) {
      encodedList = encodedList.concat(tag.toLowerCase());
    }) ;
  const filteredPortfolioUrl = `${this.portfolioUrl}/${encodedList}`;
  console.log(filteredPortfolioUrl);
  return this.http.get<Project[]>(filteredPortfolioUrl);
}
}
