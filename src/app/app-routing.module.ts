import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users.guard';
import { OnlyNotLoggedInUsersGuard } from './guards/only-not-logged-in-users.guard';

import { AuthService } from './services/auth.service';
import { RegisterService } from './services/register.service';
import { QuestionService } from './services/question.service';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/components/random/random.module#RandomModule'
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
    RegisterService,
    QuestionService
  ],
  declarations: [],
})
export class AppRoutingModule { }
