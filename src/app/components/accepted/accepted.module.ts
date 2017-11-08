import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptedComponent } from './accepted.component';
import { acceptedRouter } from './accepted-routing.module';
import { CloudModule } from '../../shared/cloud/cloud.module';
import { QuestionModule } from '../../shared/question/question.module';
import { StatsModule } from '../../shared/stats/stats.module';
import { SimpleListModule } from '../../shared/simple-list/simple-list.module';
import { ScrollableListModule } from '../../shared/scrollable-list/scrollable-list.module';

@NgModule({
  declarations: [AcceptedComponent],
  imports: [
    CommonModule,
    acceptedRouter,
    CloudModule,
    QuestionModule,
    ScrollableListModule,
    SimpleListModule,
    StatsModule
  ]
})
export class AcceptedModule { }
