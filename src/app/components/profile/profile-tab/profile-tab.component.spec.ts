import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MomentModule } from 'angular2-moment';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { MediumQuestionModule } from '../../../shared/medium-question/medium-question.module';
import { AuthService } from '../../../services/auth.service';
import { CommentService } from '../../../services/comment.service';
import { QuestionService } from '../../../services/question.service';
import { ProfileTabComponent } from './profile-tab.component';
import { LoadingModule } from 'ngx-loading';

describe('ProfileTabComponent', () => {
  let component: ProfileTabComponent;
  let fixture: ComponentFixture<ProfileTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileTabComponent
      ],
      imports: [
        HttpModule,
        InfiniteScrollModule,
        LoadingModule,
        MomentModule,
        RouterTestingModule,
        MediumQuestionModule
      ],
      providers: [
        HttpModule,
        AuthService,
        CommentService,
        QuestionService,
        SlimLoadingBarService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
