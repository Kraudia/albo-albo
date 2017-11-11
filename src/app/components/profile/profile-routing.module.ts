import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: ':login',
    redirectTo: ':login/wszystkie'
  },
  {
    path: ':login/wszystkie',
    component: ProfileComponent
  },
  {
    path: ':login/zatwierdzone',
    component: ProfileComponent
  },
  {
    path: ':login/oczekujace',
    component: ProfileComponent
  },
  {
    path: ':login/zarchiwizowane',
    component: ProfileComponent
  },
  {
    path: ':login/komentarze',
    component: ProfileComponent
  }
];

export const profileRouter = RouterModule.forChild(routes);
