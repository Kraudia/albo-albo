import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesComponent } from './rules.component';
import { rulesRouter } from './rules-routing.module';

@NgModule({
  declarations: [
    RulesComponent
  ],
  imports: [
    CommonModule,
    rulesRouter
  ]
})
export class RulesModule { }
