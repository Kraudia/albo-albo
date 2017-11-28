import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingModule } from 'ngx-loading';
import { MomentModule } from 'angular2-moment';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { profileRouter } from './profile-routing.module';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';
import { ProfileQuestionComponent } from './profile-tab/profile-question/profile-question.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileTabComponent,
    UserStatsComponent,
    ProfileQuestionComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    LoadingModule,
    MomentModule,
    profileRouter,
    PipesModule,
    MomentModule,
    NgbTooltipModule,
    RouterModule
  ]
})
export class ProfileModule { }
