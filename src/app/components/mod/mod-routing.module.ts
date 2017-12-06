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
  },
  {
    path: 'zgloszone',
    loadChildren: 'app/components/mod/mod-reported/mod-reported.module#ModReportedModule'
  }
];

export const modRouter = RouterModule.forChild(routes);
