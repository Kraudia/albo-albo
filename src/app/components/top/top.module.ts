import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { topRouter } from './top-routing.module';
import { QuestionModule } from '../../shared/question/question.module';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    TopComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
    QuestionModule,
    topRouter
  ]
})
export class TopModule { }
