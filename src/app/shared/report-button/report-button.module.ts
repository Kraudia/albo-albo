import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportButtonComponent } from './report-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReportButtonComponent
  ],
  exports: [
    ReportButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ReportButtonModule { }
