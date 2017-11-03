import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentComponent } from './comment/comment.component';
import { QuestionComponent } from './question.component';
import { VotesPipe } from '../../pipes/votes.pipe';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        MomentModule,
        RouterTestingModule
      ],
      declarations: [
        AddCommentComponent,
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
