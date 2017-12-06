import { Routes, RouterModule } from '@angular/router';

import { ModPendingComponent } from './mod-pending.component';

const routes: Routes = [
  {
    path: '',
    component: ModPendingComponent,
  }
];

export const modPendingRouter = RouterModule.forChild(routes);
