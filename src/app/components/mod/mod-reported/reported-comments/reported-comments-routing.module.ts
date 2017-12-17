import { Routes, RouterModule } from '@angular/router';

import { ReportedCommentsComponent } from './reported-comments.component';

const routes: Routes = [
  {
    path: '',
    component: ReportedCommentsComponent
  }
];

export const reportedCommentsRouter = RouterModule.forChild(routes);
