import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { topRouter } from './top-routing.module';
import { QuestionModule } from '../../shared/question/question.module';

@NgModule({
  declarations: [
    TopComponent
  ],
  imports: [
    CommonModule,
    QuestionModule,
    topRouter
  ]
})
export class TopModule { }
