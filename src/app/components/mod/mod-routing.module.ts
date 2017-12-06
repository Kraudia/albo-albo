import { Routes, RouterModule } from '@angular/router';
import { ModComponent } from './mod.component';

const routes: Routes = [
  {
    path: '',
    component: ModComponent
  },
  {
    path: 'oczekujace',
    loadChildren: 'app/components/mod/mod-pending/mod-pending.module#ModPendingModule'
  },
  {
    path: 'zgloszone',
    loadChildren: 'app/components/mod/mod-reported/mod-reported.module#ModReportedModule'
  }
];

export const modRouter = RouterModule.forChild(routes);
