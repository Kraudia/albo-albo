import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { LoadingModule } from 'ngx-loading';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService, ToastrModule } from 'ngx-toastr';

import { ModReportedQuestionsComponent } from './mod-reported-questions.component';
import { AuthService } from '../../../../services/auth.service';
import { ModService } from '../../../../services/mod.service';
import { ModReportedQuestionsDataTableComponent } from './mod-reported-questions-data-table/mod-reported-questions-data-table.component';

describe('ModReportedQuestionsComponent', () => {
  let component: ModReportedQuestionsComponent;
  let fixture: ComponentFixture<ModReportedQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModReportedQuestionsComponent,
        ModReportedQuestionsDataTableComponent
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
    fixture = TestBed.createComponent(ModReportedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
