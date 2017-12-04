import { Routes, RouterModule } from '@angular/router';
import { CookiePolicyComponent } from './cookie-policy.component';

const routes: Routes = [
  {
    path: '',
    component: CookiePolicyComponent
  }
];

export const cookiePolicyRouter = RouterModule.forChild(routes);
