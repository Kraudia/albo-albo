import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { LoadingModule } from 'ngx-loading';

import { ModReportedQuestionsComponent } from './mod-reported-questions.component';
import { modReportedQuestionsRouter } from './mod-reported-questions-routing.module';
import { ModReportedQuestionsDataTableComponent } from './mod-reported-questions-data-table/mod-reported-questions-data-table.component';

@NgModule({
  declarations: [
    ModReportedQuestionsComponent,
    ModReportedQuestionsDataTableComponent
  ],
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    LoadingModule,
    modReportedQuestionsRouter,
    InlineEditorModule
  ]
})
export class ModReportedQuestionsModule { }
