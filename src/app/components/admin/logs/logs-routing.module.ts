import { Routes, RouterModule } from '@angular/router';

import { LogsComponent } from './logs.component';

const routes: Routes = [
  {
    path: '',
    component: LogsComponent,
  }
];

export const logsRouter = RouterModule.forChild(routes);

