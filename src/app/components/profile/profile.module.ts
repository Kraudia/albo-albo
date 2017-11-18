import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { profileRouter } from './profile-routing.module';
import { UserStatsModule } from '../../shared/user-stats/user-stats.module';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileTabComponent
  ],
  imports: [
    CommonModule,
    profileRouter,
    UserStatsModule
  ]
})
export class ProfileModule { }
