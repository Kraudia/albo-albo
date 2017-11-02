import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';

import { AuthService } from '../../services/auth.service';
import { CommentComponent } from './comment/comment.component';
import { QuestionComponent } from './question.component';
import { QuestionService } from '../../services/question.service';
import { VotesPipe } from '../../pipes/votes.pipe';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        MomentModule
      ],
      declarations: [
        CommentComponent,
        QuestionComponent,
        VotesPipe
      ],
      providers: [
        AuthService,
        QuestionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
