import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pendingRouter } from './pending-routing.module';
import { PendingComponent } from './pending.component';
import { QuestionModule } from '../question/question.module';

@NgModule({
  declarations: [
    PendingComponent
  ],
  imports: [
    CommonModule,
    QuestionModule,
    pendingRouter
  ]
})

export class PendingModule {}
