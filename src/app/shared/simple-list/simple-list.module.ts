import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimpleListComponent } from './simple-list.component';

@NgModule({
  declarations: [
    SimpleListComponent
  ],
  exports: [
    SimpleListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SimpleListModule { }
