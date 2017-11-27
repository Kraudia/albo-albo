import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { MomentModule } from 'angular2-moment';

import { AuthService } from '../../../services/auth.service';
import { QuestionService } from '../../../services/question.service';
import { FavouriteQuestionComponent } from './favourite-question.component';

describe('FavouriteQuestionComponent', () => {
  let component: FavouriteQuestionComponent;
  let fixture: ComponentFixture<FavouriteQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FavouriteQuestionComponent
      ],
      imports: [
        HttpModule,
        MomentModule,
        NgbTooltipModule,
        RouterTestingModule
      ],
      providers: [
        AuthService,
        QuestionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
