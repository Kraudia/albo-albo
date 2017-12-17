import { Routes, RouterModule } from '@angular/router';

import { ReportedQuestionsComponent } from './reported-questions.component';

const routes: Routes = [
  {
    path: '',
    component: ReportedQuestionsComponent
  }
];

export const reportedQuestionsRouter = RouterModule.forChild(routes);
