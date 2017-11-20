import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { AuthService } from '../../../services/auth.service';
import { CommentService } from '../../../services/comment.service';
import { QuestionService } from '../../../services/question.service';
import { ProfileTabComponent } from './profile-tab.component';

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
        RouterTestingModule
      ],
      providers: [
        HttpModule,
        AuthService,
        CommentService,
        QuestionService
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
