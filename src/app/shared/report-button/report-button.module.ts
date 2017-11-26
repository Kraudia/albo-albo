import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportButtonComponent } from './report-button.component';

@NgModule({
  declarations: [
    ReportButtonComponent
  ],
  exports: [
    ReportButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReportButtonModule { }
