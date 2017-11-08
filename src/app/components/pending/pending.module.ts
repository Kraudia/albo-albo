import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pendingRouter } from './pending-routing.module';
import { PendingComponent } from './pending.component';
import { CloudModule } from '../../shared/cloud/cloud.module';
import { QuestionModule } from '../../shared/question/question.module';
import { StatsModule } from '../../shared/stats/stats.module';
import { SimpleListModule } from '../../shared/simple-list/simple-list.module';
import { ScrollableListModule } from '../../shared/scrollable-list/scrollable-list.module';

@NgModule({
  declarations: [
    PendingComponent
  ],
  imports: [
    CommonModule,
    CloudModule,
    QuestionModule,
    ScrollableListModule,
    SimpleListModule,
    StatsModule,
    pendingRouter
  ]
})

export class PendingModule {}
