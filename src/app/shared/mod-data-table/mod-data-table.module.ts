import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { ModDataTableComponent } from './mod-data-table.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    ModDataTableComponent
  ],
  exports: [
    ModDataTableComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    LoadingModule,
    DataTableModule
  ],
})
export class ModDataTableModule { }
