import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule } from 'ngx-loading';

import { FavouritesComponent } from './favourites.component';
import { favouritesRouter } from './favourites-routing.module';
import { MediumQuestionModule } from '../../shared/medium-question/medium-question.module';

@NgModule({
  declarations: [
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    favouritesRouter,
    MediumQuestionModule,
    LoadingModule
  ]
})
export class FavouritesModule { }
