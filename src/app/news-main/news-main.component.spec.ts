import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsMainComponent } from './news-main.component';

describe('NewsMainComponent', () => {
  let component: NewsMainComponent;
  let fixture: ComponentFixture<NewsMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
