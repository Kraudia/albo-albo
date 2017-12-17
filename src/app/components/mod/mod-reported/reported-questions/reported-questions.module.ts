import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { LoadingModule } from 'ngx-loading';
import { PrettyJsonModule } from 'angular2-prettyjson';

import { reportedQuestionsRouter } from './reported-questions-routing.module';
import { ReportedQuestionsComponent } from './reported-questions.component';

@NgModule({
  declarations: [
    ReportedQuestionsComponent
  ],
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    LoadingModule,
    reportedQuestionsRouter,
    InlineEditorModule,
    PrettyJsonModule
  ]
})
export class ReportedQuestionsModule { }
