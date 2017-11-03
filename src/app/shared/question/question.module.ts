import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';

import { QuestionComponent } from './question.component';
import { CommentComponent } from './comment/comment.component';
import { VotesPipe } from '../../pipes/votes.pipe';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    QuestionComponent,
    CommentComponent,
    VotesPipe,
    AddCommentComponent
  ],
  exports: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    RouterModule
  ]
})

export class QuestionModule {}
