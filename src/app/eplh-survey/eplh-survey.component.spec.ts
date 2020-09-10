import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EplhSurveyComponent } from './eplh-survey.component';

describe('EplhSurveyComponent', () => {
  let component: EplhSurveyComponent;
  let fixture: ComponentFixture<EplhSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EplhSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EplhSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
