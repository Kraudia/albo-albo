import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterTestingModule } from '@angular/router/testing';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { CloudModule } from '../../shared/cloud/cloud.module';
import { QuestionModule } from '../../shared/question/question.module';
import { PendingComponent } from './pending.component';
import { AuthService } from '../../services/auth.service';
import { CommentService } from '../../services/comment.service';
import { QuestionService } from '../../services/question.service';
import { StatsService } from '../../services/stats.service';
import { StatsModule } from '../../shared/stats/stats.module';
import { SimpleListModule } from '../../shared/simple-list/simple-list.module';
import { ScrollableListModule } from '../../shared/scrollable-list/scrollable-list.module';

describe('PendingComponent', () => {
  let component: PendingComponent;
  let fixture: ComponentFixture<PendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PendingComponent
      ],
      imports: [
        HttpModule,
        InfiniteScrollModule,
        CloudModule,
        QuestionModule,
        RouterTestingModule,
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
    fixture = TestBed.createComponent(PendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
