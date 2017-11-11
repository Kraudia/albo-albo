import { Routes, RouterModule } from '@angular/router';
import { ModComponent } from './mod.component';

const routes: Routes = [
  {
    path: '',
    component: ModComponent
  }
];

export const modRouter = RouterModule.forChild(routes);
