import { Routes, RouterModule } from '@angular/router';
import { FavouritesComponent } from './favourites.component';

const routes: Routes = [
  {
    path: '',
    component: FavouritesComponent
  }
];

export const favouritesRouter = RouterModule.forChild(routes);
