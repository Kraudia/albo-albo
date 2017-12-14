import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { LoadingModule } from 'ngx-loading';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PrettyJsonModule } from 'angular2-prettyjson';

import { LogsComponent } from './logs.component';
import { logsRouter } from './logs-routing.module';
import { LogsDataComponent } from './logs-data/logs-data.component';

@NgModule({
  declarations: [
    LogsComponent,
    LogsDataComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    LoadingModule,
    DataTableModule,
    PrettyJsonModule,
    logsRouter
  ]
})
export class LogsModule { }
