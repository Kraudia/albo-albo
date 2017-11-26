import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../../pipes/pipes.module';
import { QuestionComponent } from './question.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ReportButtonModule } from '../report-button/report-button.module';
import { VoteButtonModule } from '../vote-button/vote-button.module';

@NgModule({
  declarations: [
    QuestionComponent,
    CommentComponent,
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
    PipesModule,
    RouterModule,
    ReportButtonModule,
    VoteButtonModule,
    NgbTooltipModule
  ]
})

export class QuestionModule {}
