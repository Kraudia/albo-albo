import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'angular2-moment';

import { QuestionComponent } from './question.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module';
import { VoteButtonModule } from '../vote-button/vote-button.module';
import { ClipboardModule } from 'ngx-clipboard';
import { AnswersPipe } from '../../pipes/answers.pipe';

@NgModule({
  declarations: [
    QuestionComponent,
    CommentComponent,
    AnswersPipe,
    AddCommentComponent
  ],
  exports: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    ClipboardModule,
    FormsModule,
    MomentModule,
    RouterModule,
    VoteButtonModule,
    NgbTooltipModule
  ]
})

export class QuestionModule {}
