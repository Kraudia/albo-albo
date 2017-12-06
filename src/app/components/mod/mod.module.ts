import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { modRouter } from './mod-routing.module';
import { ModComponent } from './mod.component';
import { QuestionService } from '../../services/question.service';

@NgModule({
  declarations: [
    ModComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    modRouter
  ],
  providers: [
    QuestionService
  ]
})
export class ModModule { }
