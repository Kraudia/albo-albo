import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { CommentComponent } from './comment.component';
import { AuthService } from '../../../services/auth.service';
import { CommentService } from '../../../services/comment.service';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentComponent ],
      imports: [
        HttpModule,
        MomentModule
      ],
      providers: [
        AuthService,
        CommentService
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
