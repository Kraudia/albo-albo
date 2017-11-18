import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { profileRouter } from './profile-routing.module';
import { UserStatsModule } from '../../shared/user-stats/user-stats.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    profileRouter,
    UserStatsModule
  ]
})
export class ProfileModule { }
