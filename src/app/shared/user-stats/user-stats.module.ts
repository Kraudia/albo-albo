import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatsComponent } from './user-stats.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    UserStatsComponent
  ],
  exports: [
    UserStatsComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class UserStatsModule { }
