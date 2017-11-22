import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesComponent } from './favourites.component';
import { favouritesRouter } from './favourites-routing.module';

@NgModule({
  declarations: [
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    favouritesRouter
  ]
})
export class FavouritesModule { }
