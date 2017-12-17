import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule } from 'ngx-loading';
import { MomentModule } from 'angular2-moment';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../../pipes/pipes.module';
import { FavouritesComponent } from './favourites.component';
import { favouritesRouter } from './favourites-routing.module';
import { FavouriteQuestionComponent } from './favourite-question/favourite-question.component';

@NgModule({
  declarations: [
    FavouritesComponent,
    FavouriteQuestionComponent
  ],
  imports: [
    CommonModule,
    MomentModule,
    NgbTooltipModule,
    PipesModule,
    RouterModule,
    favouritesRouter,
    LoadingModule
  ]
})
export class FavouritesModule { }
