import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'oceniane'
  },
  {
    path: 'oceniane',
    component: TopComponent
  },
  {
    path: 'komentowane',
    component: TopComponent
  },
  {
    path: 'odpowiadane',
    component: TopComponent
  },
  {
    path: 'lubiane',
    component: TopComponent
  }
];

export const topRouter = RouterModule.forChild(routes);
