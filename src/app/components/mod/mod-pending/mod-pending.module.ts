import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { LoadingModule } from 'ngx-loading';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CloudModule } from '../../../shared/cloud/cloud.module';
import { modPendingRouter } from './mod-pending-routing.module';
import { ModPendingComponent } from './mod-pending.component';
import { PendingDataComponent } from './pending-data/pending-data.component';

@NgModule({
  declarations: [
    ModPendingComponent,
    PendingDataComponent
  ],
  imports: [
    CommonModule,
    CloudModule,
    InfiniteScrollModule,
    LoadingModule,
    DataTableModule,
    modPendingRouter
  ],
})
export class ModPendingModule { }
