import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from './add-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { addQuestionRouter } from './add-question-routing.module';

@NgModule({
  declarations: [
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    addQuestionRouter
  ]
})
export class AddQuestionModule { }
