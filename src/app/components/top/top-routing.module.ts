import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'oceniane'
  },
  {
    path: ':type',
    component: TopComponent
  }
];

export const topRouter = RouterModule.forChild(routes);
