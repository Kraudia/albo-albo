import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { randomRouter } from './random-routing.module';
import { RandomComponent } from './random.component';
import { QuestionComponent } from '../question/question.component';

@NgModule({
  declarations: [
    RandomComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    randomRouter
  ]
})

export class RandomModule {}
