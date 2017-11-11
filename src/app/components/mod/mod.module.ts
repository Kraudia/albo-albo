import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModComponent } from './mod.component';
import { modRouter } from './mod-routing.module';

@NgModule({
  declarations: [
    ModComponent
  ],
  imports: [
    CommonModule,
    modRouter
  ]
})
export class ModModule { }
