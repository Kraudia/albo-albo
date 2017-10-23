import { NgModule } from '@angular/core';
import { RegisterComponent } from "./register.component";

import { registerRouter } from './register.router';

@NgModule({
  declarations: [ RegisterComponent ],
  imports: [ registerRouter ]
})

export class RegisterModule {}
