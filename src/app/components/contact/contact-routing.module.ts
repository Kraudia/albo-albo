import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

export const contactRouter = RouterModule.forChild(routes);
