import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswersPipe } from './answers.pipe';
import { CommentsPipe } from './comments.pipe';
import { VotesPipe } from './votes.pipe';
import { FavouritesPipe } from './favourites.pipe';
import { CreatedQuestionsPipe } from './created-questions.pipe';
import { AcceptedQuestionsPipe } from './accepted-questions.pipe';
import { PendingQuestionsPipe } from './pending-questions.pipe';
import { RejectedQuestionsPipe } from './rejected-questions.pipe';
import { FavouriteQuestionsPipe } from './favourite-questions.pipe';

@NgModule({
  declarations: [
    AnswersPipe,
    CommentsPipe,
    FavouritesPipe,
    VotesPipe,
    CreatedQuestionsPipe,
    AcceptedQuestionsPipe,
    PendingQuestionsPipe,
    RejectedQuestionsPipe,
    FavouriteQuestionsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnswersPipe,
    CommentsPipe,
    FavouritesPipe,
    VotesPipe,
    CreatedQuestionsPipe,
    AcceptedQuestionsPipe,
    PendingQuestionsPipe,
    RejectedQuestionsPipe,
    FavouriteQuestionsPipe
  ]
})
export class PipesModule { }
