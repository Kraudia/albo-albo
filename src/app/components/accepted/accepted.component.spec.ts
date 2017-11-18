import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { AcceptedComponent } from './accepted.component';
import { CloudModule } from '../../shared/cloud/cloud.module';
import { QuestionModule } from '../../shared/question/question.module';
import { AuthService } from '../../services/auth.service';
import { CommentService } from '../../services/comment.service';
import { QuestionService } from '../../services/question.service';
import { StatsService } from '../../services/stats.service';
import { StatsModule } from '../../shared/stats/stats.module';
import { SimpleListModule } from '../../shared/simple-list/simple-list.module';
import { ScrollableListModule } from '../../shared/scrollable-list/scrollable-list.module';

describe('AcceptedComponent', () => {
  let component: AcceptedComponent;
  let fixture: ComponentFixture<AcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AcceptedComponent
      ],
      imports: [
        HttpModule,
        InfiniteScrollModule,
        CloudModule,
        QuestionModule,
        ScrollableListModule,
        SimpleListModule,
        StatsModule
      ],
      providers: [
        AuthService,
        CommentService,
        QuestionService,
        StatsService,
        SlimLoadingBarService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
