import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { LoadingModule } from 'ngx-loading';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService, ToastrModule } from 'ngx-toastr';

import { AuthService } from '../../../../services/auth.service';
import { ModService } from '../../../../services/mod.service';
import { ModReportedCommentsComponent } from './mod-reported-comments.component';
import { ModReportedCommentsDataTableComponent } from './mod-reported-comments-data-table/mod-reported-comments-data-table.component';

describe('ModReportedCommentsComponent', () => {
  let component: ModReportedCommentsComponent;
  let fixture: ComponentFixture<ModReportedCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModReportedCommentsComponent,
        ModReportedCommentsDataTableComponent
      ],
      imports: [
        HttpModule,
        DataTableModule,
        FormsModule,
        RouterTestingModule,
        InlineEditorModule,
        LoadingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        AuthService,
        ModService,
        ToastrService,
        SlimLoadingBarService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModReportedCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
