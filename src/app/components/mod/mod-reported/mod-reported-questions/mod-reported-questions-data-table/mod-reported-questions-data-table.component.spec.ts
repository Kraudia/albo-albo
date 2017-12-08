import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { LoadingModule } from 'ngx-loading';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService, ToastrModule } from 'ngx-toastr';

import { AuthService } from '../../../../../services/auth.service';
import { ModService } from '../../../../../services/mod.service';
import { ModReportedQuestionsDataTableComponent } from './mod-reported-questions-data-table.component';
import { FormsModule } from '@angular/forms';

describe('ModReportedQuestionsDataTableComponent', () => {
  let component: ModReportedQuestionsDataTableComponent;
  let fixture: ComponentFixture<ModReportedQuestionsDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModReportedQuestionsDataTableComponent
      ],
      imports: [
        HttpModule,
        DataTableModule,
        FormsModule,
        InlineEditorModule,
        LoadingModule,
        RouterTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        AuthService,
        ModService,
        SlimLoadingBarService,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModReportedQuestionsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
