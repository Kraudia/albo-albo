import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModComponent } from './mod.component';
import { modRouter } from './mod-routing.module';
import { ModDataTableModule } from '../../shared/mod-data-table/mod-data-table.module';
import { QuestionService } from '../../services/question.service';
import { CloudModule } from '../../shared/cloud/cloud.module';

@NgModule({
  declarations: [
    ModComponent
  ],
  imports: [
    CommonModule,
    CloudModule,
    ModDataTableModule,
    modRouter
  ],
  providers: [
    QuestionService
  ]
})
export class ModModule { }