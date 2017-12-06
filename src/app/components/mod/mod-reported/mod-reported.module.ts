import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModReportedComponent } from './mod-reported.component';
import { modReportedRouter } from './mod-reported-routing.module';

@NgModule({
  declarations: [
    ModReportedComponent
  ],
  imports: [
    CommonModule,
    modReportedRouter
  ]
})
export class ModReportedModule { }
