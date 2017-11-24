import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule } from 'ngx-loading';

import { FavouritesComponent } from './favourites.component';
import { favouritesRouter } from './favourites-routing.module';
import { FavouriteQuestionModule } from '../../shared/favourite-question/favourite-question.module';

@NgModule({
  declarations: [
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    favouritesRouter,
    FavouriteQuestionModule,
    LoadingModule
  ]
})
export class FavouritesModule { }
