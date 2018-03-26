import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from '../language.service';
import { ActivatedRoute } from '@angular/router';
import { Language } from '../languages';
import { Location } from '@angular/common';

@Component({
  selector: 'app-languages-detail',
  templateUrl: './languages-detail.component.html',
  styleUrls: ['./languages-detail.component.css']
})
export class LanguagesDetailComponent implements OnInit {
@Input() language: Language;
  constructor(private location: Location,
    private route: ActivatedRoute,
    private languageService: LanguageService) { }

  ngOnInit() {
    this.route.params.subscribe(() => { this.getLanguage(); } );

  }
getLanguage(): void {
  const name = this.route.snapshot.paramMap.get('name');
  this.languageService.getLanguage(name)
  .subscribe(language => this.language = language);
}

}
