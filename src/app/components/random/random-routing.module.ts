import { Routes, RouterModule } from '@angular/router';
import { RandomComponent } from './random.component';

const routes: Routes = [
  {
    path: '',
    component: RandomComponent
  }
];

export const randomRouter = RouterModule.forChild(routes);
