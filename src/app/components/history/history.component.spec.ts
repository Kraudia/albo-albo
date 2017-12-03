import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingModule } from 'ngx-loading';
import { MomentModule } from 'angular2-moment';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';
import { HistoryComponent } from './history.component';
import { QuestionModule } from '../../shared/question/question.module';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HistoryComponent
      ],
      imports: [
        HttpModule,
        InfiniteScrollModule,
        LoadingModule,
        MomentModule,
        QuestionModule,
        RouterTestingModule
      ],
      providers: [
        SlimLoadingBarService,
        AuthService,
        QuestionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
