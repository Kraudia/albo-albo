import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryComponent } from './history.component';
import { historyRouter } from './history-routing.module';

@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    historyRouter
  ]
})
export class HistoryModule { }
