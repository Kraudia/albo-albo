import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { LoadingModule } from 'ngx-loading';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ModComponent } from './mod.component';
import { ModPendingComponent } from './mod-pending/mod-pending.component';
import { modRouter } from './mod-routing.module';
import { QuestionService } from '../../services/question.service';
import { CloudModule } from '../../shared/cloud/cloud.module';
import { ModDataTableComponent } from './mod-pending/mod-data-table/mod-data-table.component';

@NgModule({
  declarations: [
    ModComponent,
    ModPendingComponent,
    ModDataTableComponent
  ],
  imports: [
    CommonModule,
    CloudModule,
    InfiniteScrollModule,
    LoadingModule,
    DataTableModule,
    RouterModule,
    modRouter
  ],
  providers: [
    QuestionService
  ]
})
export class ModModule { }
