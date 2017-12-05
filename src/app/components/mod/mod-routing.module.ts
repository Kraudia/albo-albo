import { Routes, RouterModule } from '@angular/router';
import { ModComponent } from './mod.component';
import { ModPendingComponent } from './mod-pending/mod-pending.component';
import { ModReportedComponent } from './mod-reported/mod-reported.component';

const routes: Routes = [
  {
    path: '',
    component: ModComponent
  },
  {
    path: 'oczekujace',
    component: ModPendingComponent
  },
  {
    path: 'zgloszone',
    component: ModReportedComponent
  }
];

export const modRouter = RouterModule.forChild(routes);
