import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';

import { EditQuestionComponent } from './edit-question.component';
import { editQuestionRouter } from './edit-question-routing.module';

@NgModule({
  declarations: [
    EditQuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    editQuestionRouter,
    LoadingModule
  ]
})
export class EditQuestionModule { }
