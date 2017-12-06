import { Routes, RouterModule } from '@angular/router';

import { ModReportedCommentsComponent } from './mod-reported-comments.component';

const routes: Routes = [
  {
    path: '',
    component: ModReportedCommentsComponent
  }
];

export const modReportedCommentsRouter = RouterModule.forChild(routes);
