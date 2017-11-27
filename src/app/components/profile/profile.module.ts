import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingModule } from 'ngx-loading';
import { MomentModule } from 'angular2-moment';

import { ProfileComponent } from './profile.component';
import { profileRouter } from './profile-routing.module';
import { MediumQuestionModule } from '../../shared/medium-question/medium-question.module';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileTabComponent,
    UserStatsComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    LoadingModule,
    MomentModule,
    profileRouter,
    MediumQuestionModule,
    PipesModule
  ]
})
export class ProfileModule { }
