import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { randomRouter } from './random-routing.module';
import { RandomComponent } from './random.component';
import { QuestionModule } from '../../shared/question/question.module';

@NgModule({
  declarations: [
    RandomComponent
  ],
  imports: [
    CommonModule,
    randomRouter,
    QuestionModule
  ]
})

export class RandomModule {}
