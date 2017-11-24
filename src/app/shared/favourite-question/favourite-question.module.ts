import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { RouterModule } from '@angular/router';

import { FavouriteQuestionComponent } from './favourite-question.component';

@NgModule({
  declarations: [
    FavouriteQuestionComponent
  ],
  imports: [
    CommonModule,
    MomentModule,
    NgbTooltipModule,
    RouterModule
  ],
  exports: [
    FavouriteQuestionComponent
  ]
})
export class FavouriteQuestionModule { }
