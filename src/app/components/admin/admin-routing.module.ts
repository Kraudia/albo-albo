import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'edytuj',
    loadChildren: 'app/components/admin/edit-question/edit-question.module#EditQuestionModule'
  },
  {
    path: 'logi',
    loadChildren: 'app/components/admin/logs/logs.module#LogsModule'
  }
];

export const adminRouter = RouterModule.forChild(routes);
