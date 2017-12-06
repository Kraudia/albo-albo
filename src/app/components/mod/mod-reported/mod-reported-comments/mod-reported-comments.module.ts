import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModReportedCommentsComponent } from './mod-reported-comments.component';
import { modReportedCommentsRouter } from './mod-reported-comments-routing.module';

@NgModule({
  declarations: [
    ModReportedCommentsComponent
  ],
  imports: [
    CommonModule,
    modReportedCommentsRouter
  ]
})
export class ModReportedCommentsModule { }
