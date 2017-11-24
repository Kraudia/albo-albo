import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingModule } from 'ngx-loading';
import { RouterModule } from '@angular/router';

import { ModDataTableComponent } from './mod-data-table.component';

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
    DataTableModule,
    RouterModule
  ],
})
export class ModDataTableModule { }
