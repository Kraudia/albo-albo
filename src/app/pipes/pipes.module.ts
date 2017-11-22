import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswersPipe } from './answers.pipe';
import { CommentsPipe } from './comments.pipe';
import { VotesPipe } from './votes.pipe';
import { FavouritesPipe } from './favourites.pipe';

@NgModule({
  declarations: [
    AnswersPipe,
    CommentsPipe,
    FavouritesPipe,
    VotesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnswersPipe,
    CommentsPipe,
    FavouritesPipe,
    VotesPipe
  ]
})
export class PipesModule { }
