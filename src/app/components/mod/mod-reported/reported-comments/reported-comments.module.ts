import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { LoadingModule } from 'ngx-loading';
import { PrettyJsonModule } from 'angular2-prettyjson';

import { ReportedCommentsComponent } from './reported-comments.component';
import { reportedCommentsRouter } from './reported-comments-routing.module';

@NgModule({
  declarations: [
    ReportedCommentsComponent
  ],
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    LoadingModule,
    InlineEditorModule,
    reportedCommentsRouter,
    PrettyJsonModule
  ]
})
export class ReportedCommentsModule { }
