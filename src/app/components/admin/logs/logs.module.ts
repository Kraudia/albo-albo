import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsComponent } from './logs.component';
import { logsRouter } from './logs-routing.module';

@NgModule({
  declarations: [
    LogsComponent
  ],
  imports: [
    CommonModule,
    logsRouter
  ]
})
export class LogsModule { }