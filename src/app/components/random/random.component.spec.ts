import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { RandomComponent } from './random.component';
import { QuestionModule } from '../../shared/question/question.module';
import { AuthService } from '../../services/auth.service';
import { CommentService } from '../../services/comment.service';
import { QuestionService } from '../../services/question.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('RandomComponent', () => {
  let component: RandomComponent;
  let fixture: ComponentFixture<RandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        QuestionModule,
        RouterTestingModule
      ],
      declarations: [
        RandomComponent
      ],
      providers: [
        AuthService,
        CommentService,
        QuestionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
