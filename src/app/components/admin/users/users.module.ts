import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { LoadingModule } from 'ngx-loading';

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
    FormsModule,
    LoadingModule,
    DataTableModule,
    usersRouter
  ],
})
export class UsersModule { }
