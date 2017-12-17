import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { VoteButtonComponent } from './vote-button.component';

@NgModule({
  declarations: [
    VoteButtonComponent
  ],
  exports: [
    VoteButtonComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ToastrService
  ]
})
export class VoteButtonModule { }
