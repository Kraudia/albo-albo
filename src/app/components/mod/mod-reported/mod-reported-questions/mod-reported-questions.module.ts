import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { ModReportedQuestionsComponent } from './mod-reported-questions.component';
import { modReportedQuestionsRouter } from './mod-reported-questions-routing.module';
import { ModReportedQuestionsDataTableComponent } from './mod-reported-questions-data-table/mod-reported-questions-data-table.component';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    ModReportedQuestionsComponent,
    ModReportedQuestionsDataTableComponent
  ],
  imports: [
    CommonModule,
    DataTableModule,
    LoadingModule,
    modReportedQuestionsRouter
  ]
})
export class ModReportedQuestionsModule { }
