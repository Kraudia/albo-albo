import { Routes, RouterModule } from '@angular/router';

import { EditQuestionComponent } from './edit-question.component';

const routes: Routes = [
  {
    path: '',
    component: EditQuestionComponent,
  }
];

export const editQuestionRouter = RouterModule.forChild(routes);
