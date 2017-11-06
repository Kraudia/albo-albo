import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';

@NgModule({
  declarations: [
    StatsComponent
  ],
  exports: [
    StatsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StatsModule { }
