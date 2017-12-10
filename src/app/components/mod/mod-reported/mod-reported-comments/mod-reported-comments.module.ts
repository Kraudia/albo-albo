import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { LoadingModule } from 'ngx-loading';
import { PrettyJsonModule } from 'angular2-prettyjson';

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
    DataTableModule,
    FormsModule,
    LoadingModule,
    InlineEditorModule,
    modReportedCommentsRouter,
    PrettyJsonModule
  ]
})
export class ModReportedCommentsModule { }
