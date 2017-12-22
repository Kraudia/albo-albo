import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { usersRouter } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersDataComponent } from './users-data/users-data.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersDataComponent
  ],
  imports: [
    CommonModule,
    usersRouter
  ],
})
export class UsersModule { }
