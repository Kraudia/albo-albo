import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pendingRouter } from './pending-routing.module';
import { PendingComponent } from './pending.component';
import { CloudModule } from '../../shared/cloud/cloud.module';
import { QuestionModule } from '../../shared/question/question.module';

@NgModule({
  declarations: [
    PendingComponent
  ],
  imports: [
    CommonModule,
    CloudModule,
    QuestionModule,
    pendingRouter
  ]
})

export class PendingModule {}
