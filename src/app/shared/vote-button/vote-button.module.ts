import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteButtonComponent } from './vote-button.component';

@NgModule({
  declarations: [
    VoteButtonComponent
  ],
  exports: [
    VoteButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VoteButtonModule { }
