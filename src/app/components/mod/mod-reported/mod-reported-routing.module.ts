import { Routes, RouterModule } from '@angular/router';

import { ModReportedComponent } from './mod-reported.component';

const routes: Routes = [
  {
    path: '',
    component: ModReportedComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pytania'
      },
      {
        path: 'pytania',
        loadChildren: 'app/components/mod/mod-reported/reported-questions/reported-questions.module#ReportedQuestionsModule'
      },
      {
        path: 'komentarze',
        loadChildren: 'app/components/mod/mod-reported/reported-comments/reported-comments.module#ReportedCommentsModule'
      }
    ]
  }
];

export const modReportedRouter = RouterModule.forChild(routes);
