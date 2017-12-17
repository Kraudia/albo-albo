import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingModule } from 'ngx-loading';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrModule, ToastrService, } from 'ngx-toastr';
import { PrettyJsonModule } from 'angular2-prettyjson';

import { LogsComponent } from './logs.component';
import { LogsDataComponent } from './logs-data/logs-data.component';
import { AdminService } from '../../../services/admin.service';
import { AuthService } from '../../../services/auth.service';

describe('LogsComponent', () => {
  let component: LogsComponent;
  let fixture: ComponentFixture<LogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LogsComponent,
        LogsDataComponent
      ],
      imports: [
        HttpModule,
        FormsModule,
        DataTableModule,
        InfiniteScrollModule,
        LoadingModule,
        PrettyJsonModule,
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
    fixture = TestBed.createComponent(LogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
