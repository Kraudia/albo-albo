import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

import { loginRouter } from './login-routing.module';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [ loginRouter ]
})

export class LoginModule {}
