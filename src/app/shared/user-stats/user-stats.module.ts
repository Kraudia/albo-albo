import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatsComponent } from './user-stats.component';

@NgModule({
  declarations: [
    UserStatsComponent
  ],
  exports: [
    UserStatsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserStatsModule { }
