import { Routes, RouterModule } from '@angular/router';

import { ModReportedQuestionsComponent } from './mod-reported-questions.component';

const routes: Routes = [
  {
    path: '',
    component: ModReportedQuestionsComponent
  }
];

export const modReportedQuestionsRouter = RouterModule.forChild(routes);
