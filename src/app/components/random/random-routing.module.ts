import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './random.component';

const routes: Routes = [
  {
    path: '',
    component: RandomComponent
  },
  {
    path: ':id',
    component: RandomComponent
  },
  {
    path: ':id/:short',
    component: RandomComponent
  }
];

export const randomRouter = RouterModule.forChild(routes);
