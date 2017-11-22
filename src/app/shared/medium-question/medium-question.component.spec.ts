import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MomentModule } from 'angular2-moment';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';

import { PipesModule } from '../../pipes/pipes.module';
import { MediumQuestionComponent } from './medium-question.component';

describe('MediumQuestionComponent', () => {
  let component: MediumQuestionComponent;
  let fixture: ComponentFixture<MediumQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MediumQuestionComponent
      ],
      imports: [
        MomentModule,
        NgbTooltipModule,
        RouterTestingModule,
        PipesModule
      ]
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
