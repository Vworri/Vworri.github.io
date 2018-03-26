import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesDetailComponent } from './languages-detail.component';

describe('LanguagesDetailComponent', () => {
  let component: LanguagesDetailComponent;
  let fixture: ComponentFixture<LanguagesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
