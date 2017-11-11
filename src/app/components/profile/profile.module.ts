import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { profileRouter } from './profile-routing.module';
import { StatsModule } from '../../shared/stats/stats.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    profileRouter,
    StatsModule
  ]
})
export class ProfileModule { }
