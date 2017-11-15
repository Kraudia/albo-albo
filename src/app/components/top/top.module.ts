import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { topRouter } from './top-routing.module';

@NgModule({
  declarations: [
    TopComponent
  ],
  imports: [
    CommonModule,
    topRouter
  ]
})
export class TopModule { }
