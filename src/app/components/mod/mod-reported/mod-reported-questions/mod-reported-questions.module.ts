import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModReportedQuestionsComponent } from './mod-reported-questions.component';
import { modReportedQuestionsRouter } from './mod-reported-questions-routing.module';

@NgModule({
  declarations: [
    ModReportedQuestionsComponent
  ],
  imports: [
    CommonModule,
    modReportedQuestionsRouter
  ]
})
export class ModReportedQuestionsModule { }
