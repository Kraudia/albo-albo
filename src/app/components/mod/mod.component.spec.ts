import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadingModule } from 'ngx-loading';
import { ToastrModule, ToastrService, } from 'ngx-toastr';

import { CloudModule } from '../../shared/cloud/cloud.module';
import { ModComponent } from './mod.component';
import { AuthService } from '../../services/auth.service';
import { QuestionService } from '../../services/question.service';
import { ModService } from '../../services/mod.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ModDataTableComponent } from './mod-data-table/mod-data-table.component';

describe('ModComponent', () => {
  let component: ModComponent;
  let fixture: ComponentFixture<ModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModComponent,
        ModDataTableComponent
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
    fixture = TestBed.createComponent(ModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
