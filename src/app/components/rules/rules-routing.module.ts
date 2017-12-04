import { Routes, RouterModule } from '@angular/router';
import { RulesComponent } from './rules.component';

const routes: Routes = [
  {
    path: '',
    component: RulesComponent
  }
];

export const rulesRouter = RouterModule.forChild(routes);
