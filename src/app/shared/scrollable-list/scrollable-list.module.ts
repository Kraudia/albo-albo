import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule } from 'ngx-loading';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ScrollableListComponent } from './scrollable-list.component';
import { QuestionModule } from '../question/question.module';

@NgModule({
  declarations: [ScrollableListComponent],
  exports: [
    ScrollableListComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    LoadingModule,
    QuestionModule
  ]
})
export class ScrollableListModule { }
