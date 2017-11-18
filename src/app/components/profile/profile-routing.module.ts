import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: ':login',
    component: ProfileComponent,
    children: [
      {
        path: 'wszystkie',
        component: ProfileTabComponent
      },
      {
        path: 'zatwierdzone',
        component: ProfileTabComponent
      },
      {
        path: 'oczekujace',
        component: ProfileTabComponent
      },
      {
        path: 'zarchiwizowane',
        component: ProfileTabComponent
      },
      {
        path: 'komentarze',
        component: ProfileTabComponent
      }
    ]
  }
];

export const profileRouter = RouterModule.forChild(routes);
