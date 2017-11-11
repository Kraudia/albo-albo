import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

export const profileRouter = RouterModule.forChild(routes);
