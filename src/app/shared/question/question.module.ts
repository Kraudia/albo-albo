import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';

import { QuestionComponent } from './question.component';
import { CommentComponent } from './comment/comment.component';
import { VotesPipe } from '../../pipes/votes.pipe';

@NgModule({
  declarations: [
    QuestionComponent,
    CommentComponent,
    VotesPipe
  ],
  exports: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    MomentModule
  ]
})

export class QuestionModule {}
