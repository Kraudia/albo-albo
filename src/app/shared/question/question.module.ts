import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';

import { QuestionComponent } from './question.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    QuestionComponent,
    CommentComponent
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
