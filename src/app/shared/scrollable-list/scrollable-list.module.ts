import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollableListComponent } from './scrollable-list.component';
import { QuestionModule } from '../question/question.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

@NgModule({
  declarations: [ScrollableListComponent],
  exports: [
    ScrollableListComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(255,255,255,0.5)',
      primaryColour: '#1F8A70',
      secondaryColour: '#BEDB39',
      tertiaryColour: '#FFE11A'
    }),
    QuestionModule
  ]
})
export class ScrollableListModule { }
