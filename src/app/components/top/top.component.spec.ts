import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopComponent } from './top.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { LoadingModule } from 'ngx-loading';

import { QuestionModule } from '../../shared/question/question.module';
import { QuestionService } from '../../services/question.service';
import { AuthService } from '../../services/auth.service';

describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        LoadingModule,
        QuestionModule,
        RouterTestingModule
      ],
      declarations: [
        TopComponent
      ],
      providers: [
        AuthService,
        QuestionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
