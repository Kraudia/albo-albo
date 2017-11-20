import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ProfileComponent } from './profile.component';
import { profileRouter } from './profile-routing.module';
import { UserStatsModule } from '../../shared/user-stats/user-stats.module';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileTabComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(255,255,255,0.5)',
      primaryColour: '#1F8A70',
      secondaryColour: '#BEDB39',
      tertiaryColour: '#FFE11A'
    }),
    MomentModule,
    profileRouter,
    UserStatsModule
  ]
})
export class ProfileModule { }
