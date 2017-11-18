import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingModule } from 'ngx-loading';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';
import { QuestionModule } from '../question/question.module';
import { ScrollableListComponent } from './scrollable-list.component';

describe('ScrollableListComponent', () => {
  let component: ScrollableListComponent;
  let fixture: ComponentFixture<ScrollableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScrollableListComponent
      ],
      imports: [
        HttpModule,
        InfiniteScrollModule,
        LoadingModule,
        QuestionModule
      ],
      providers: [
        AuthService,
        QuestionService,
        SlimLoadingBarService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
