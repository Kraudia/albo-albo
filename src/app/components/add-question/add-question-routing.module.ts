import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question.component';

const routes: Routes = [
  {
    path: '',
    component: AddQuestionComponent
  }
];

export const addQuestionRouter = RouterModule.forChild(routes);
