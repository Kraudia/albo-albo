import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpComponent } from './help.component';
import { helpRouter } from './help-routing.module';

@NgModule({
  declarations: [
    HelpComponent
  ],
  imports: [
    CommonModule,
    helpRouter
  ]
})
export class HelpModule { }
