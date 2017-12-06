import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingModule } from 'ngx-loading';
import { ToastrModule, ToastrService, } from 'ngx-toastr';

import { CloudModule } from '../../../shared/cloud/cloud.module';
import { ModPendingComponent } from './mod-pending.component';
import { AuthService } from '../../../services/auth.service';
import { QuestionService } from '../../../services/question.service';
import { ModService } from '../../../services/mod.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ModPendingDataTableComponent } from './mod-pending-data-table/mod-pending-data-table.component';

describe('ModPendingComponent', () => {
  let component: ModPendingComponent;
  let fixture: ComponentFixture<ModPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModPendingComponent,
        ModPendingDataTableComponent
      ],
      imports: [
        HttpModule,
        CloudModule,
        DataTableModule,
        InfiniteScrollModule,
        LoadingModule,
        RouterTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        AuthService,
        ModService,
        QuestionService,
        SlimLoadingBarService,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
