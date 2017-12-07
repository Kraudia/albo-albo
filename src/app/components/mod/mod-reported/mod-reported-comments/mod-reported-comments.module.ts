import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModReportedCommentsComponent } from './mod-reported-comments.component';
import { modReportedCommentsRouter } from './mod-reported-comments-routing.module';
import { ModReportedCommentsDataTableComponent } from './mod-reported-comments-data-table/mod-reported-comments-data-table.component';

@NgModule({
  declarations: [
    ModReportedCommentsComponent,
    ModReportedCommentsDataTableComponent
  ],
  imports: [
    CommonModule,
    modReportedCommentsRouter
  ]
})
export class ModReportedCommentsModule { }
