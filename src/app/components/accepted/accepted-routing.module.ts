import { Routes, RouterModule } from '@angular/router';
import { AcceptedComponent } from './accepted.component';

const routes: Routes = [
  {
    path: '',
    component: AcceptedComponent
  }
];

export const acceptedRouter = RouterModule.forChild(routes);
