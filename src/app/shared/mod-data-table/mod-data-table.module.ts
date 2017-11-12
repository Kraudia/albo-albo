import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

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
    DataTableModule
  ],
})
export class ModDataTableModule { }
