import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookiePolicyComponent } from './cookie-policy.component';
import { cookiePolicyRouter } from './cookie-policy-routing.module';

@NgModule({
  declarations: [
    CookiePolicyComponent
  ],
  imports: [
    CommonModule,
    cookiePolicyRouter
  ]
})
export class CookiePolicyModule { }
