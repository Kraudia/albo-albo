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
        loadChildren: 'app/components/mod/mod-reported/mod-reported-questions/mod-reported-questions.module#ModReportedQuestionsModule'
      },
      {
        path: 'komentarze',
        loadChildren: 'app/components/mod/mod-reported/mod-reported-comments/mod-reported-comments.module#ModReportedCommentsModule'
      }
    ]
  }
];

export const modReportedRouter = RouterModule.forChild(routes);
