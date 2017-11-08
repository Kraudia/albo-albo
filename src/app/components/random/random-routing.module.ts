import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './random.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pytanie',
    pathMatch: 'full'
  },
  {
    path: 'pytanie',
    component: RandomComponent
  },
  {
    path: 'pytanie/:id',
    component: RandomComponent
  },
  {
    path: 'pytanie/:id/:short',
    component: RandomComponent
  }
];

export const randomRouter = RouterModule.forChild(routes);
