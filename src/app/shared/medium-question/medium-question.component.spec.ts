import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumQuestionComponent } from './medium-question.component';

describe('MediumQuestionComponent', () => {
  let component: MediumQuestionComponent;
  let fixture: ComponentFixture<MediumQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
