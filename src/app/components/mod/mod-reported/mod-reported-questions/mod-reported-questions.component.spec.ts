import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModReportedQuestionsComponent } from './mod-reported-questions.component';

describe('ModReportedQuestionsComponent', () => {
  let component: ModReportedQuestionsComponent;
  let fixture: ComponentFixture<ModReportedQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModReportedQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModReportedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
