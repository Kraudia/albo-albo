import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from './add-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { addQuestionRouter } from './add-question-routing.module';
import { EmojisModule } from 'ng2-emojis';

@NgModule({
  declarations: [
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    EmojisModule,
    FormsModule,
    ReactiveFormsModule,
    addQuestionRouter
  ]
})
export class AddQuestionModule { }
