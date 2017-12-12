import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditQuestionComponent } from './edit-question.component';
import { editQuestionRouter } from './edit-question-routing.module';

@NgModule({
  declarations: [
    EditQuestionComponent
  ],
  imports: [
    CommonModule,
    editQuestionRouter
  ]
})
export class EditQuestionModule { }
