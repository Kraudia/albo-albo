import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users.guard';
import { OnlyNotLoggedInUsersGuard } from './guards/only-not-logged-in-users.guard';

import { AuthService } from './services/auth.service';
import { CommentService } from './services/comment.service';
import { QuestionService } from './services/question.service';
import { RegisterService } from './services/register.service';
import { StatsService } from './services/stats.service';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/components/random/random.module#RandomModule'
  },
  {
    path: 'poczekalnia',
    loadChildren: 'app/components/pending/pending.module#PendingModule'
  },
  {
    path: 'logowanie',
    loadChildren: 'app/components/login/login.module#LoginModule',
    canLoad: [ OnlyNotLoggedInUsersGuard ]
  },
  {
    path: 'rejestracja',
    loadChildren: 'app/components/register/register.module#RegisterModule',
    canLoad: [ OnlyNotLoggedInUsersGuard ]
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '404',
    loadChildren: 'app/components/page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    OnlyLoggedInUsersGuard,
    OnlyNotLoggedInUsersGuard,
    AuthService,
    CommentService,
    QuestionService,
    RegisterService,
    StatsService
  ],
  declarations: [],
})
export class AppRoutingModule { }
