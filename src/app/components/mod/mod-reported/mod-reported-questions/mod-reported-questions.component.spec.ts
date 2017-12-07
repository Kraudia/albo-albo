import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { LoadingModule } from 'ngx-loading';
import { ToastrService, ToastrModule } from 'ngx-toastr';

import { ModReportedQuestionsComponent } from './mod-reported-questions.component';
import { AuthService } from '../../../../services/auth.service';
import { ModService } from '../../../../services/mod.service';
import { ModReportedQuestionsDataTableComponent } from './mod-reported-questions-data-table/mod-reported-questions-data-table.component';
import { HttpModule } from '@angular/http';

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
        RouterTestingModule,
        LoadingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        AuthService,
        ModService,
        ToastrService
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
