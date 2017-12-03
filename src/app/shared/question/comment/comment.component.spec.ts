import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MomentModule } from 'angular2-moment';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CommentComponent } from './comment.component';
import { AuthService } from '../../../services/auth.service';
import { CommentService } from '../../../services/comment.service';
import { VoteButtonModule } from '../../vote-button/vote-button.module';
import { ReportButtonModule } from '../../report-button/report-button.module';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentComponent ],
      imports: [
        HttpModule,
        MomentModule,
        RouterTestingModule,
        ReportButtonModule,
        VoteButtonModule,
        ToastrModule.forRoot()
      ],
      providers: [
        AuthService,
        CommentService,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
