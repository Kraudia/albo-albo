import { NgModule } from '@angular/core';
import { RegisterComponent } from "./register.component";

import { registerRouter } from './register.router';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ RegisterComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    registerRouter
  ]
})

export class RegisterModule {}
