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
        path: ':status',
        component: ProfileTabComponent
      }
    ]
  }
];

export const profileRouter = RouterModule.forChild(routes);
