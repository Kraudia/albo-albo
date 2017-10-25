import { Routes, RouterModule } from '@angular/router';
import { PendingComponent } from './pending.component';

const routes: Routes = [
  {
    path: '',
    component: PendingComponent
  }
];

export const pendingRouter = RouterModule.forChild(routes);
