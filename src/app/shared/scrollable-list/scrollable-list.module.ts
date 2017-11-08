import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollableListComponent } from './scrollable-list.component';
import { QuestionModule } from '../question/question.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [ScrollableListComponent],
  exports: [
    ScrollableListComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    QuestionModule
  ]
})
export class ScrollableListModule { }
