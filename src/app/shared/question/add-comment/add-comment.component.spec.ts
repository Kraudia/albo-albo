import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from '../../../services/auth.service';
import { CommentService } from '../../../services/comment.service';
import { AddCommentComponent } from './add-comment.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddCommentComponent', () => {
  let component: AddCommentComponent;
  let fixture: ComponentFixture<AddCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommentComponent ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        AuthService,
        CommentService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
