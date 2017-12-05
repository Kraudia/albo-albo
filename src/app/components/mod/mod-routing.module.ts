import { Routes, RouterModule } from '@angular/router';
import { ModComponent } from './mod.component';
import { ModPendingComponent } from './mod-pending/mod-pending.component';

const routes: Routes = [
  {
    path: '',
    component: ModComponent
  },
  {
    path: 'oczekujace',
    component: ModPendingComponent
  }
];

export const modRouter = RouterModule.forChild(routes);
