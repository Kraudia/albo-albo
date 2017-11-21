import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module';
import { ClipboardModule } from 'ngx-clipboard';

import { AuthService } from '../../services/auth.service';
import { CommentService } from '../../services/comment.service';
import { QuestionService } from '../../services/question.service';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentComponent } from './comment/comment.component';
import { QuestionComponent } from './question.component';
import { VotesPipe } from '../../pipes/votes.pipe';
import { VoteButtonModule } from '../vote-button/vote-button.module';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        ClipboardModule,
        MomentModule,
        NgbTooltipModule,
        RouterTestingModule,
        VoteButtonModule,
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
        })
      ],
      declarations: [
        AddCommentComponent,
        CommentComponent,
        QuestionComponent,
        VotesPipe
      ],
      providers: [
        AuthService,
        CommentService,
        QuestionService,
        ToastrService
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
