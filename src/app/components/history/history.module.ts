import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MomentModule } from 'angular2-moment';
import { LoadingModule } from 'ngx-loading';

import { QuestionModule } from '../../shared/question/question.module';
import { HistoryComponent } from './history.component';
import { historyRouter } from './history-routing.module';
@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    LoadingModule,
    MomentModule,
    QuestionModule,
    historyRouter
  ]
})
export class HistoryModule { }
