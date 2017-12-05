import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users.guard';
import { OnlyNotLoggedInUsersGuard } from './guards/only-not-logged-in-users.guard';

import { AddQuestionService } from './services/add-question.service';
import { AuthService } from './services/auth.service';
import { CommentService } from './services/comment.service';
import { QuestionService } from './services/question.service';
import { RegisterService } from './services/register.service';
import { StatsService } from './services/stats.service';
import { AdminGuard } from './guards/admin.guard';
import { ModGuard } from './guards/mod.guard';
import { ModService } from './services/mod.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pytanie',
    pathMatch: 'full'
  },
  {
    path: 'dodaj',
    loadChildren: 'app/components/add-question/add-question.module#AddQuestionModule',
    canLoad: [ OnlyLoggedInUsersGuard ]
  },
  {
    path: 'pytanie',
    loadChildren: 'app/components/random/random.module#RandomModule'
  },
  {
    path: 'najnowsze',
    loadChildren: 'app/components/accepted/accepted.module#AcceptedModule'
  },
  {
    path: 'poczekalnia',
    loadChildren: 'app/components/pending/pending.module#PendingModule'
  },
  {
    path: 'top',
    loadChildren: 'app/components/top/top.module#TopModule'
  },
  {
    path: 'profil',
    loadChildren: 'app/components/profile/profile.module#ProfileModule'
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
    path: 'historia',
    loadChildren: 'app/components/history/history.module#HistoryModule',
    canLoad: [ OnlyLoggedInUsersGuard ]
  },
  {
    path: 'ulubione',
    loadChildren: 'app/components/favourites/favourites.module#FavouritesModule',
    canLoad: [ OnlyLoggedInUsersGuard ]
  },
  {
    path: 'ustawienia',
    loadChildren: 'app/components/settings/settings.module#SettingsModule',
    canLoad: [ OnlyLoggedInUsersGuard ]
  },
  {
    path: 'administracja',
    loadChildren: 'app/components/admin/admin.module#AdminModule',
    canLoad: [ AdminGuard, ModGuard, OnlyLoggedInUsersGuard ]
  },
  {
    path: 'moderacja',
    loadChildren: 'app/components/mod/mod.module#ModModule',
    canLoad: [ ModGuard, OnlyLoggedInUsersGuard ]
  },
  {
    path: 'kontakt',
    loadChildren: 'app/components/contact/contact.module#ContactModule'
  },
  {
    path: 'pomoc',
    loadChildren: 'app/components/help/help.module#HelpModule'
  },
  {
    path: 'polityka',
    loadChildren: 'app/components/cookie-policy/cookie-policy.module#CookiePolicyModule'
  },
  {
    path: 'regulamin',
    loadChildren: 'app/components/rules/rules.module#RulesModule'
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
    AdminGuard,
    ModGuard,
    OnlyLoggedInUsersGuard,
    OnlyNotLoggedInUsersGuard,
    AddQuestionService,
    AuthService,
    CommentService,
    ModService,
    QuestionService,
    RegisterService,
    StatsService,
    ToastrService
  ],
  declarations: [],
})
export class AppRoutingModule { }
