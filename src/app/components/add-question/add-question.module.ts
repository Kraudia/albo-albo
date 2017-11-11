import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from './add-question.component';
import { addQuestionRouter } from './add-question-routing.module';

@NgModule({
  declarations: [
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    addQuestionRouter
  ]
})
export class AddQuestionModule { }
