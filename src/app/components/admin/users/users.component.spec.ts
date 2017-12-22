import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { LoadingModule } from 'ngx-loading';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AdminService } from '../../../services/admin.service';
import { AuthService } from '../../../services/auth.service';
import { UsersComponent } from './users.component';
import { UsersDataComponent } from './users-data/users-data.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent,
        UsersDataComponent
      ],
      imports: [
        HttpModule,
        FormsModule,
        DataTableModule,
        LoadingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        AuthService,
        AdminService,
        SlimLoadingBarService,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
