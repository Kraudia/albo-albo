import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../../pipes/pipes.module';
import { MediumQuestionComponent } from './medium-question.component';

@NgModule({
  declarations: [
    MediumQuestionComponent
  ],
  imports: [
    CommonModule,
    MomentModule,
    NgbTooltipModule,
    PipesModule,
    RouterModule
  ],
  exports: [
    MediumQuestionComponent
  ]
})
export class MediumQuestionModule { }
